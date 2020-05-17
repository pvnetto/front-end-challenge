const fetchNewModels = require('../autoforce/fetchNewModels');
const doContentDigest = require('./doContentDigest');

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
            items: version.item_list,
            profileImgUrl: version.item_image.url,
        })) : [];
};

const getModelVideos = (modelData) => {
    const { videos_gallery } = modelData;
    return videos_gallery && videos_gallery.length > 0 ? videos_gallery : [];
}

module.exports = async ({ createNode }, getNodes) => {

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
                // bannerUrl: modelData.item_gallery[0].url.replace('http:', 'https:'),
                versions: getModelVersions(modelData),
                videoGallery: getModelVideos(modelData),
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