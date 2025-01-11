const orderModel = require("../../models/orderModel")
const userModel = require("../../models/userModel")

const ordersController = async(req, res)=>{
    const userId = req.userId

    const user = await userModel.findById(userId)

    if (user.role !== 'Admin'){
        return res.status(500).json({
            message: "You don't have access"
        })
    }

    const Orders = await orderModel.find().sort({ createdAt: -1 })

    return res.status(200).json({
        message: "Orders",
        success: true,
        error: false,
        data: Orders
    })
}

module.exports = ordersController