require('dotenv').config();

const crypto = require('crypto');
const path = require('path');
const { createFilePath, createRemoteFileNode } = require("gatsby-source-filesystem");

const fetchNewModels = require('./api/fetchNewModels');
const units = require('./config/units');


const doContentDigest = (node) => {
    const contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(node))
        .digest('hex');

    return contentDigest;
};

const generateUnitNodes = async ({ createNode }) => {
    const createUnitPromises = units.map(async (unit, idx) => {
        const unitNode = {
            ...unit,
            id: `${idx}`,
            parent: '__SOURCE__',
            internal: {
                type: 'Unit',     // This is the name of the GraphQL query
            },
            children: [],
        };

        const unitDigest = doContentDigest(unitNode);
        unitNode.internal.contentDigest = unitDigest;
        await createNode(unitNode);
    });

    await Promise.all(createUnitPromises);
};

const generateUserModels = async ({ createNode }, getNodes) => {
    const getModelVersions = (modelData) => {
        return modelData.children_list ?
            modelData.children_list.map(version => ({
                name: version.subtitle,
                price: version.price,
                stats: {
                    SPECS: version.detail_list,
                    COMFORT: version.comfort_list,
                    SAFETY: version.item_list,
                    CONNECTIVITY: version.connectivity_list,
                },
                profileImgUrl: version.item_image.url,
            })) : [];
    };

    const files = await getNodes().filter(node => node.internal.type === 'File');

    await fetchNewModels().then(res => {
        res.data.entries.map((modelData, idx) => {
            const modelNode = {
                id: `${modelData.id}`,
                brand: modelData.brand.name,
                name: modelData.name,
                description: modelData.model.description,
                price: modelData.price,
                slug: modelData.slug,
                profileImgUrl: modelData.profile_image,
                bannerUrl: modelData.item_gallery[0].url.replace('http:', 'https:'),// modelData.item_background.replace('http:', 'https:'),
                versions: getModelVersions(modelData),
                parent: '__SOURCE__',
                internal: {
                    type: 'Model',
                },
                children: [],
            };

            const userDigest = doContentDigest(modelNode);
            modelNode.internal.contentDigest = userDigest;
            createNode(modelNode);
        });
    });
};

exports.sourceNodes = async ({ actions, getNodes }) => {
    const { createNode } = actions;
    await generateUnitNodes(actions, getNodes);
    await generateUserModels(actions, getNodes);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    await graphql(
        `
        {
            allModel {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
        `
    ).then(result => {
        if (result.errors) {
            reporter.panicOnBuild('Error while fetching Models from GraphQL.');
            return;
        }

        const modelData = result.data.allModel.edges.map(item => item.node);

        modelData.forEach((model, idx) => {
            createPage({
                path: `${model.slug}`,
                component: path.resolve('./src/templates/offer.js'),
                context: {
                    id: model.id,
                }
            });
        });
    });
};

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId }) => {
    const { createNode } = actions;

    // For all UserModel nodes that have a profile image url, call createRemoteFileNode
    if (node.internal.type === "Model") {
        let modelPromises = [];
        if (node.profileImgUrl) {
            await createRemoteFileNode({
                url: node.profileImgUrl,
                parentNodeId: node.id,
                createNode,
                createNodeId,
                cache,
                store,
            }).then(profileImgNode => {
                if (profileImgNode) node.profileImg___NODE = profileImgNode.id;
            }).catch(err => console.log('Error while fetching profile image :(', err));
        }
        if (node.bannerUrl) {
            await createRemoteFileNode({
                url: node.bannerUrl,
                parentNodeId: node.id,
                createNode,
                createNodeId,
                cache,
                store,
            }).then(bannerImgNode => {
                if (bannerImgNode) node.bannerImg___NODE = bannerImgNode.id;
            }).catch(err => console.log('Error :(', err));;
        }
        if (node.versions) {
            let versionPromises = node.versions.map(async (version, idx) => {
                await createRemoteFileNode({
                    url: version.profileImgUrl,
                    parentNodeId: node.id,
                    createNode,
                    createNodeId,
                    cache,
                    store,
                }).then(profileImgNode => {
                    if (profileImgNode) node.versions[idx].profileImg___NODE = profileImgNode.id;
                }).catch(err => console.log('Error :(', err));;
            });

            return await Promise.all(versionPromises);
        }
    }
}