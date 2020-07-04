const {Router} = require("express");
const mongoose = require('mongoose');

const User = require("../models/User");
const router = Router();

router.get("/updateUser",
async(req, res) => {
    try {
        const userId = req.query.userId;
        const userName = req.query.userName;
        const userLastname = req.query.userLastname;
        const userPhone = req.query.userPhone;
        const userAdress = req.query.userAdress;

        const objectId = mongoose.Types.ObjectId(userId);


            if (userName && userLastname && userPhone && userAdress) {
                await User.updateOne({_id: objectId}, {$set: 
                    {name: userName, lastName: userLastname, phone: userPhone, adress: userAdress} });
                res.status(201).json({message: "Информация о пользователе обновлена"});
            } else {
                res.status(400).json({message: "Поля не могут быть пустыми"});
            }

    } catch {
        res.status(500).json({message: "Ошибка обновления информации о пользователе"});
    }

})

module.exports = router;