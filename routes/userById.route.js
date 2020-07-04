const {Router} = require("express");
const mongoose = require('mongoose');


const User = require("../models/User");
const router = Router();



router.get("/UserById",
async(req, res) =>{
    try {
        
        const id = req.query.id;
        const objectId = mongoose.Types.ObjectId(id);
        
        const user = await User.findOne({"_id": objectId});

            if (user) {
                res.status(201).json(user);
            } else {
                res.status(400).json({message: "Ничего нет"});
            }
            
        } catch {
        res.status(500).json({message: "Ошибка при поиске товаров в базе"});
    }    
    
})

module.exports = router;