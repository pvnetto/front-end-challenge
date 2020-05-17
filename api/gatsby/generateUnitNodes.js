const units = require('../mock/units');
const doContentDigest = require('./doContentDigest');

module.exports = async ({ createNode }) => {
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