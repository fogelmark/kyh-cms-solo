const Order = require('../Schema/orderSchema')

exports.createNewOrder = async (req, res) => {
  const { orderRows } = req.body

  if(!orderRows) {
    return res.status(400).json({
      message: "You need to enter all fields"
    })
  }
  try {
    const data = await Order.create({
      orderRows,
      userId: req.userId
    })
    res.status(201).json({ userId: data.userId })
  } catch (error) {
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