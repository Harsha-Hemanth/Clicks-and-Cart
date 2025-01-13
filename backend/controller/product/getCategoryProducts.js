const productModel = require("../../models/productModel")

const getCategoryProducts = async(req,res)=>{
    try{
        const { category } = req?.body || req?.query
        const products = await productModel.find({ category }).select({
            productName: 1,
            price: 1,
            sellingPrice: 1,
            image: { $slice: 1},
            brand: 1
        })

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