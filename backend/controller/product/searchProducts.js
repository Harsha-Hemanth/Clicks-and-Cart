const productModel = require("../../models/productModel")

const searchProducts = async(req, res)=>{
    try{
        const query = req.query.q
        const regex = new RegExp(query, 'i', 'g')

        const products = await productModel.find({
            $or: [
                {productName: regex},
                {category: regex}
            ]
        })

        res.json({
            message: "Search products",
            success: true,
            error: false,
            data: products
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = searchProducts