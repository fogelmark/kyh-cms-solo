const router = require('express').Router()
const {getOrders, createOrder, getMyOrder} = require('../Model/orderModel')
const auth = require('../authentication/auth')


router.post('/', auth.verifyToken, createOrder)
router.get('/minaOrder', auth.verifyToken, getMyOrder )

// bara admin kan se alla orders
router.get('/allOrders',auth.verifyToken, auth.checkAdmin, getOrders )

module.exports = router;
