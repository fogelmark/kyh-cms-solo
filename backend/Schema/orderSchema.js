const mongoose = require('mongoose')
const { Schema } = mongoose

const orderRowSchema = mongoose.Schema({
    product: mongoose.Schema.Types.ObjectId, 
    quantity: Number 
  })

const orderSchema = new Schema({
  userId:       { type: mongoose.Types.ObjectId },
  orderRows:    { type: [orderRowSchema] },
  status:       { type: String, default: 'pending' }
})

module.exports = mongoose.model('Order', orderSchema)