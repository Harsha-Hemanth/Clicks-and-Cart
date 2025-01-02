const cartProductModel = require("../../models/cartProduct")

const countCartProducts = async(req, res)=>{
    try{
        const userId = req.userId
        const count = await cartProductModel.countDocuments({userId})

        res.json({
            message: "Count fetched successfully",
            error: false,
            success: true,
            data: {count: count}
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = countCartProducts