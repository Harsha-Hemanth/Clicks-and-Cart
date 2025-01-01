const mongoose = require('mongoose')

const cartProduct = mongoose.Schema({
    productId: String,
    quantity: Number,
    userId: String,
},{
    timestamps : true
})

const cartProductModel = mongoose.model("cartProduct",cartProduct)

module.exports = cartProductModel