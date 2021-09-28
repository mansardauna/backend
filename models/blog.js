const mongoose = require('mongoose')
require('dotenv').config();

// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }


const url = 'mongodb+srv://sardauna:sardauna@cluster0.jjpmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})


blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
