const productModel = require("../../models/productModel")


const getCategoryProduct = async(req,res)=>{
    try{
        const productCategories = await productModel.distinct("category")

        const productByCategory = []

        for(const category of productCategories){
            const product = await productModel.findOne({category})

            if(product){
                productByCategory.push(product)
            }
        }


        res.json({
            message : "category product",
            success : true,
            error : false,
            data : productByCategory
        })


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryProduct