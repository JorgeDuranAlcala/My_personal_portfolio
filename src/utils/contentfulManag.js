/* const contentful = require('contentful-management')

 const client = contentful.createClient({
    accessToken: '<content_management_api_key>'
  }) 
  // Create entry
   client.getSpace('<space_id>')
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
.catch(console.error) */
