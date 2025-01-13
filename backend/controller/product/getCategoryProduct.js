const productModel = require("../../models/productModel")


const getCategoryProduct = async(req,res)=>{
    try{

        const productByCategory = await productModel.aggregate([
            {
                $group: {
                    _id: "$category",
                    product: { $first: "$$ROOT" }
                }
            },
            {
                $replaceRoot: { newRoot: "$product"}
            },
            {
                $project: { category: 1, image: { $arrayElemAt: ["$image", 0] }}
            }
        ])

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