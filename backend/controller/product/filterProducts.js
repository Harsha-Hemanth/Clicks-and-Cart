const productModel = require("../../models/productModel")

const filterProductsController = async(req,res)=>{
    try{
        const categoryList = req?.body?.category || []
        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
        }).select({
            productName: 1,
            price: 1,
            sellingPrice: 1,
            image: { $slice: 1},
            brand: 1
        })

        res.json({
            message : "Filtered products",
            error : false,
            success : true,
            data : product
        })
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}


module.exports = filterProductsController