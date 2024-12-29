const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: String,
    brand: String,
    category: String,
    image: [],
    description: String,
    price: Number,
    sellingPrice: Number,
    seller: String
},{
    timestamps: true
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel