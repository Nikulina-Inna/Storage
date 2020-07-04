const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.get("/confirmOrder",
async(req, res) => {
    try {
        const userId = req.query.userId;
        const delivery = req.query.delivery;
        const payment = req.query.payment
        const currentOrder = await Order.findOne({userId: userId, orderStatus: "active"});

            if (currentOrder) {
                await Order.updateOne({_id: currentOrder._id}, {$set: {orderStatus: "processing", 
                delivery: delivery, payment: payment} });
                res.status(201).json({message: "Заказ подтвержден и передан для обработки"});
            } else {
                res.status(400).json({message: "В корзине нет товаров"});
            }

        } catch {
            res.status(500).json({message: "Ошибка подтверждения заказа"});
        }

})

module.exports = router;