const router = require('express').Router()
const adminModel = require('../Model/adminModel')
// const auth = require('../authentication/auth')


router.post('/register', adminModel.createNewAdmin)
router.post('/login', adminModel.loginAdmin)
router.get('/:id', adminModel.getAdminById)



module.exports = router;