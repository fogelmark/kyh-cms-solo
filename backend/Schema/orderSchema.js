
const mongoose = require('mongoose')
const { Schema } = mongoose;

const orderRaderSchema = new Schema({
    product:        {type: Schema.Types.ObjectId, ref: 'Product' , required: true},
    count:          {type: Number}
})

const orderSchema = new  Schema({
    user:        {type: Schema.Types.ObjectId, ref: 'User' , required: true},
    orderRader:    {type: [orderRaderSchema], required: true}

})


module.exports = mongoose.model('Order', orderSchema)