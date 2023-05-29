const router = require('express').Router()
const userModel = require('../Model/userModel')
const auth = require('../authentication/auth')


router.post('/register', userModel.createNewUser )
router.post('/login', userModel.loginUser )
router.get('/', userModel.getAllUsers )
router.get('/:id', userModel.getUserById)

module.exports = router;