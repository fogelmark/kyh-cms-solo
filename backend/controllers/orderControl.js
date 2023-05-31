const router = require('express').Router()
const { getAllOrders, createNewOrder, getUserOrder } = require('../Model/orderModel')
const auth = require('../authentication/auth')



router.get('/allOrders', getAllOrders )
router.get('/myOrders', auth.verifyToken, getUserOrder )
router.post('/add', auth.verifyToken, createNewOrder)


module.exports = router;