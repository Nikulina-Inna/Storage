const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.get("/processingOrders",
async(req, res) => {
    try {
        
        const orders = await Order.find({ orderStatus: "processing"});
        
            if (orders.length) {
                res.status(201).json(orders);
            } else {
                res.status(400).json({message: "Нет новых заказов"});
            }

        } catch {
            res.status(500).json({message: "Ошибка при получении списка заказов"});
        }

})

module.exports = router;