require('dotenv').config();

const { createFilePath, createRemoteFileNode } = require("gatsby-source-filesystem");

const generateModelNodes = require('./api/gatsby/generateModelNodes');
const generateUnitNodes = require('./api/gatsby/generateUnitNodes');

const createOfferPage = require('./api/gatsby/createOfferPage');

exports.sourceNodes = async ({ actions, getNodes }) => {
    const { createNode } = actions;
    await generateUnitNodes(actions, getNodes);
    await generateModelNodes(actions, getNodes);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    await createOfferPage({ graphql, actions, reporter });
};

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId }) => {
    const { createNode } = actions;

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