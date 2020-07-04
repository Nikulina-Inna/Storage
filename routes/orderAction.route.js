const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.get("/orderAction",
async(req, res) => {
    try {
        const orderId = req.query.id;
        const objectId = mongoose.Types.ObjectId(orderId);
        const action = req.query.action;

        const currentOrder = await Order.findOne({"_id": objectId});

            if (currentOrder) {
                await Order.updateOne({_id: currentOrder._id}, {$set: {orderStatus: action} });
                res.status(201).json({message: "Заказ обработан"});
            } else {
                res.status(400).json({message: "Данного заказа нет"});
            }

        } catch {
            res.status(500).json({message: "Ошибка обработки заказа"});
        }

})

module.exports = router;