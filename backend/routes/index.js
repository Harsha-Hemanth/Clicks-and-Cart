const express = require('express')
const userSignUpController = require('../controller/userSugnUp')
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const uploadProductController = require('../controller/uploadProduct')
const productsController = require('../controller/products')

const router = express.Router()

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/logout', userLogout)

router.post('/upload-product',authToken, uploadProductController)
router.get("/products", authToken, productsController)


module.exports = router