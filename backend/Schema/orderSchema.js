const mongoose = require('mongoose')
const { Schema } = mongoose

const orderRowSchema = mongoose.Schema({
    product: mongoose.Schema.Types.ObjectId, 
    quantity: Number 
  })

const orderSchema = new Schema({
  userId:       { type: mongoose.Types.ObjectId },
  orderRows:    { type: [orderRowSchema] }
})

module.exports = mongoose.model('Order', orderSchema)