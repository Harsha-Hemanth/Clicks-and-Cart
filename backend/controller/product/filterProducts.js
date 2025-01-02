const productModel = require("../../models/productModel")

const filterProductsController = async(req,res)=>{
    try{
        const categoryList = req?.body?.category || []
        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
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