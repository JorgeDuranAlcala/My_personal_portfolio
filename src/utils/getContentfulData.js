const contentful = require("contentful");

const space = 'ruuwpi1fhiq5';
const accessToken = '5vdWq97e7p4ag333-kSrsmG2htFJDPY091ve9BRw4gI';
const client = contentful.createClient({
    space,
    accessToken
})

export const getContentfulData = async (content_type) => {

    try {
    
        const res = await client.getEntries({content_type, limit: 3} );
        
        return res.items;
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllContentFulData = async (content_type) => {

    try {
    
        const res = await client.getEntries({content_type} );
        
        return res.items;
        
    } catch (error) {
        console.log(error)
    }
}

export const getContentById = async id => {
    try {
        
        const res = await client.getEntry(id);
       console.log(res)
        return res.fields

    } catch (error) {
        console.log(error)
    }
}

/* const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: '<content_management_api_key>'
}) */

// Create entry
/* client.getSpace('<space_id>')
.then((space) => space.createEntryWithId('<content_type_id>', '<entry_id>', {
  fields: {
    title: {
      'en-US': 'Entry title'
    }
  }
}))
.then((entry) => console.log(entry))
.catch(console.error)

// Update entry
client.getSpace('<space_id>')
.then((space) => space.getEntry('<entry_id>'))
.then((entry) => {
  entry.fields.title['en-US'] = 'New entry title'
  return entry.update()
})
.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
.catch(console.error)
 */