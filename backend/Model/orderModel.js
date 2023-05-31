const Order = require('../Schema/orderSchema')

exports.createNewOrder = async (req, res) => {
  const { orderRows } = req.body
  console.log('Received request to create new order:', orderRows)

  if(!orderRows) {
    console.log('Missing orderRows field')
    return res.status(400).json({
      message: "You need to enter all fields"
    })
  }
  try {
    const data = await Order.create({
      orderRows,
      userId: req.userId
    })
    console.log('Order created:', data)
    res.status(201).json(data)
  } catch (error) {
    console.log('Error creating order:', error)
    return res.status(500).json({
      message: "Something went wrong when creating the order",
      error: error.message
    })
  }
}

exports.getUserOrder = async (req, res) => {
  try {
    const orders = await Order.find({userId: req.userId})
    res.status(200).json(orders)
  } catch (error) {   
    return res.status(404).json({message: 'Could not find user order'})
  }
}


exports.getAllOrders = async (req, res) =>{
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (error) {
    return res.status(404).json({ message: 'Could not fetch orders'})
  }
}