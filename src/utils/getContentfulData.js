const contentful = require("contentful");

const space = 'ruuwpi1fhiq5';
const accessToken = '5vdWq97e7p4ag333-kSrsmG2htFJDPY091ve9BRw4gI';

const getContentfulData = async (content_type) => {
    const client = contentful.createClient({
        space,
        accessToken
    })

    const res = await client.getEntries({content_type, limit: 3} );
    console.log(res.limit)
    return res.items;
}

export default getContentfulData;