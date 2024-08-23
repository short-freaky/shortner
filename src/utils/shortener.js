const ShortUniqueId = require('short-unique-id');

const { randomUUID } = new ShortUniqueId({ length: 10 });


const generateShortUrl = () => {
    var id_generated = randomUUID();
    return id_generated;
};

module.exports = generateShortUrl;
