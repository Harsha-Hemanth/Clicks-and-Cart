const cartProductModel = require("../../models/cartProduct")

const addToCartController = async(req,res)=>{
    try{
        const { productId } = req?.body
        const userId = req.userId

        const isProductAvailable = await cartProductModel.findOne({ productId })

        if (isProductAvailable){
            return res.json({
                message: "Product is already in your cart",
                success: false,
                error: true
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: userId
        }

        const newCartProduct = new cartProductModel(payload)
        const saveProduct = await newCartProduct.save()

        return res.json({
            message: "Product added to cart successfully",
            success: true,
            error: false,
            data: saveProduct
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = addToCartController;