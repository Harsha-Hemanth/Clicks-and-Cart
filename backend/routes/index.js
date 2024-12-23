const express = require('express')
const userSignUpController = require('../controller/userSugnUp')

const router = express.Router()

router.post('/signup',userSignUpController)


module.exports = router