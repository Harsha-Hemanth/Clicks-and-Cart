const express = require('express')
const userSignUpController = require('../controller/user/userSugnUp')
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const uploadProductController = require('../controller/product/uploadProduct')
const productsController = require('../controller/product/products')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProducts = require('../controller/product/getCategoryProducts')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCart')
const countCartProducts = require('../controller/user/countCartProducts')
const cartProducts = require('../controller/user/cartProducts')
const updateCart = require('../controller/user/updateCart')
const deleteCartProduct = require('../controller/user/deleteCartProduct')
const searchProducts = require('../controller/product/searchProducts')
const filterProductsController = require('../controller/product/filterProducts')
const paymentController = require('../controller/order/paymentController')
const webhooks = require('../controller/order/webhook')
const myOrdersController = require('../controller/order/myOrdersController')
const ordersController = require('../controller/order/ordersController')

const router = express.Router()

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/logout', userLogout)

router.post('/upload-product',authToken, uploadProductController)
router.get("/products", authToken, productsController)
router.post("/update-product", authToken, updateProductController)

router.post("/get-category-products", getCategoryProducts)
router.post("/get-product-details", getProductDetails)
router.get("/search-products", searchProducts)
router.post("/filter-products", filterProductsController)

router.post("/addtocart", authToken, addToCartController)
router.get("/count-cartproducts",authToken, countCartProducts)
router.get("/cartproducts", authToken, cartProducts)
router.post("/update-cart", authToken, updateCart)
router.post("/delete-cartproduct", authToken, deleteCartProduct)

router.post('/checkout', authToken, paymentController)
router.post("/webhook", webhooks) // /api/webhook
router.get("/myorders", authToken, myOrdersController)
router.get("/orders", authToken, ordersController)


module.exports = router