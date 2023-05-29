const router = require('express').Router()
const contactModel = require('../Model/contactModel')


router.post('/add', contactModel.createNewSubject)
router.get('/', contactModel.getAllSubject)




module.exports = router;