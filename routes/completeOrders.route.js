const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.get("/getCompleteOrders",
async(req, res) => {
    try {
        const userId = req.query.userId;
        const currentOrder = await Order.find({userId: userId, orderStatus: "complete"});

            if (currentOrder) {
                res.status(201).json(currentOrder);
            } else {
                res.status(400).json({message: "Покупки еще не были совершены"});
            }

        } catch {
            res.status(500).json({message: "Ошибка при получении истории заказов"});
        }

})

module.exports = router;