const contentful = require("contentful");

const space = 'ruuwpi1fhiq5';
const accessToken = '5vdWq97e7p4ag333-kSrsmG2htFJDPY091ve9BRw4gI';

export const getContentfulData = async (content_type) => {

    try {
        
        const client = contentful.createClient({
            space,
            accessToken
        })
    
        const res = await client.getEntries({content_type, limit: 3} );
        
        return res.items;
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllContentFulData = async (content_type) => {

    try {
        
        const client = contentful.createClient({
            space,
            accessToken
        })
    
        const res = await client.getEntries({content_type} );
        
        return res.items;
        
    } catch (error) {
        console.log(error)
    }
}
