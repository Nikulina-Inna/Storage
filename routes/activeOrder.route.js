const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.get("/getActiveOrder",
async(req, res) => {
    try {
        const userId = req.query.userId;
        const currentOrder = await Order.findOne({userId: userId, orderStatus: "active"});

            if (currentOrder) {
                res.status(201).json(currentOrder);
            } else {
                res.status(400).json({message: "В корзине нет товаров"});
            }

        } catch {
            res.status(500).json({message: "Ошибка при получении активного заказа"});
        }

})

module.exports = router;