const router = require('express').Router()
const { getAllOrders, createNewOrder, getUserOrder, updateStatus } = require('../Model/orderModel')
const auth = require('../authentication/auth')



router.get('/allOrders', getAllOrders )
router.get('/myOrders', auth.verifyToken, getUserOrder )
router.post('/add', auth.verifyToken, createNewOrder)
router.put('/:id', auth.verifyToken, updateStatus)


module.exports = router;