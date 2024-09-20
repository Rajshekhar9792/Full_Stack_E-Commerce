const orderModel = require("../../models/OrderProductModel")

const orderController = async(request, responce) => {
    try{
       const currentUserId = request.userId

       const orderList = await orderModel.find({
        userId : currentUserId}).sort({createdAt: -1})

        responce.status(200).json({
            data : orderList,
            message : "Order list",
            success: true
        })

    }catch(error){
        responce.status(500).json({
            message : error.message || error,
            error: true
        })
    }
}

module.exports = orderController