const express = require('express')
const userSignUpController = require('../controller/user/userSugnUp')
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const uploadProductController = require('../controller/product/uploadProduct')
const productsController = require('../controller/product/products')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProduct')

const router = express.Router()

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/logout', userLogout)

router.post('/upload-product',authToken, uploadProductController)
router.get("/products", authToken, productsController)
router.post("/update-product", authToken, updateProductController)

router.get("/get-category-product", getCategoryProduct)


module.exports = router