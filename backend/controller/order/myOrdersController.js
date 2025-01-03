const orderModel = require("../../models/orderModel")

const myOrdersController = async(req, res)=>{
    try{
        const userId = req.userId

        const orders = await orderModel.find({userId}).sort({createdAt: -1})

        res.json({
            message: "orders fetched",
            success: true,
            error: false,
            data: orders
        })
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = myOrdersController