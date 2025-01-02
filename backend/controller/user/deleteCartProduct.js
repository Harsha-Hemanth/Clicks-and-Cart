const cartProductModel = require("../../models/cartProduct")

const deleteCartProduct = async(req,res)=>{
    try{
        const CartProductId = req.body._id

        const deleteProduct = await cartProductModel.deleteOne({ _id : CartProductId})

        res.json({
            message : "Product Removed",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteCartProduct