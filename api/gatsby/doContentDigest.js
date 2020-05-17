const crypto = require('crypto');

module.exports = (node) => {
    const contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(node))
        .digest('hex');

    return contentDigest;
};