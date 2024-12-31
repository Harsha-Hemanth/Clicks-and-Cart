const productModel = require("../../models/productModel")

const getCategoryProducts = async(req,res)=>{
    try{
        const { category } = req?.body || req?.query
        const products = await productModel.find({ category })

        res.json({
            message : "Products fetched successfully",
            error : false,
            success: true,
            data : products,
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryProducts