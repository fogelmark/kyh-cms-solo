const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    fullName:        {type: String, required: true},
    email:           {type: String, required: true},
    mobile:          {type: String, },
    company:         {type: String, },
    subject:         {type: String, required: true}
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;