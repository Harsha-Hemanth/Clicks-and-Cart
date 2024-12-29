const uploadProductPermission = require("../helpers/permission")
const productModel = require("../models/productModel")

const productsController = async(req, res) => {
    try{
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }

        const products = await productModel.find({ seller: sessionUserId }).sort({ createdAt: -1 })

        res.json({
            message: "products fetched successfully",
            success: true,
            error: false,
            data: products
        })
    } catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = productsController