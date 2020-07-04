const {Router} = require("express");
const mongoose = require('mongoose');

const Order = require("../models/Order");
const router = Router();

router.post("/AddOrder",
async(req, res) => {
    try {
        const {item, size, userId, itemPrice, picture, value} = req.body;
        const currentOrder = await Order.findOne({userId: userId, orderStatus: "active"});

            if (currentOrder) {

                const newItems = currentOrder.items;
                newItems.push(item);
                const newPrice = currentOrder.price;
                newPrice.push(itemPrice);
                const newSize = currentOrder.size;
                newSize.push(size);
                const newPictures = currentOrder.picture;
                newPictures.push(picture);
                const newValue = currentOrder.value;
                newValue.push(value);

                await Order.updateOne({_id: currentOrder._id}, {$set: {items: newItems, 
                    price: newPrice, size: newSize, picture: newPictures, value: newValue,
                    delivery: "none", payment: "none"} });
            
            } else {
                const orderDate = new Date();
                const currentDate = [
                    orderDate.getFullYear(),
                    orderDate.getDate(),
                    orderDate.getMonth() + 1
                ];
                const order = new Order({items: item,userId: userId, orderStatus: "active", 
                date: currentDate, price: itemPrice, size: size, picture: picture, value: value,
                delivery: "none", payment: "none"});
                await order.save();
            }

        res.status(201).json({massage: "Товар добавлен к заказу"});
    } catch {
        res.status(500).json({message: "Ошибка добавления товара"});
    }
    
        
    

    
    
})

module.exports = router;