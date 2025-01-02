const cartProductModel = require("../../models/cartProduct")

const cartProducts = async(req, res)=>{
    try{
        const userId = req?.userId

        const allProducts = await cartProductModel.find({userId}).populate("productId")

        res.json({
            success: true,
            error: false,
            data: allProducts
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        }) 
    }
}

module.exports = cartProducts