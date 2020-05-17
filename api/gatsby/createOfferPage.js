const path = require('path');

module.exports = async ({ graphql, actions, reporter }) => {
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
                component: path.resolve(__dirname, '../../', 'src', 'templates/offer.js'),
                context: {
                    id: model.id,
                }
            });
        });
    });
}