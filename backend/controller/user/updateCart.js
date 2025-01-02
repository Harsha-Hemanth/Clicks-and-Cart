const cartProductModel = require("../../models/cartProduct")

const updateCart = async(req,res)=>{
    try{
        const cartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await cartProductModel.updateOne({_id: cartProductId},{
            ...(qty && {quantity: qty})
        })

        res.json({
            message : "Product Updated",
            data : updateProduct,
            error : false,
            success : true
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateCart