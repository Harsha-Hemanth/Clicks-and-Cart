const express = require('express')
const userSignUpController = require('../controller/userSugnUp')
const userSignInController = require('../controller/userSignIn')

const router = express.Router()

router.post('/signup',userSignUpController)
router.post('/signin', userSignInController)


module.exports = router