const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.get("/deleteActiveOrder",
async(req, res) => {
    try {
        const userId = req.query.userId;
        await Order.deleteOne({ userId: userId, orderStatus: "active"});
        const currentOrder = await Order.findOne({userId: userId, orderStatus: "active"});

            if (currentOrder) {
                res.status(401).json({message: "Произошла ошибка"});
            } else {
                res.status(201).json({message: "Корзина пуста"});
            }

        } catch {
            res.status(500).json({message: "Ошибка при удалении заказа"});
        }

})

module.exports = router;