const {Router} = require("express");
const mongoose = require('mongoose');


const Item = require("../models/Item");
const router = Router();



router.get("/ItemById",
async(req, res) =>{
    try {
        const id = req.query.id;
        const objectId = mongoose.Types.ObjectId(id);
        
        const item = await Item.findOne({"_id": objectId});

            if (item) {
                res.status(201).json(item);
            } else {
                res.status(400).json({message: "Ничего нет"});
            }
            
        } catch {
        res.status(500).json({message: "Ошибка при поиске товаров в базе"});
    }
        



    
        
    
})

module.exports = router;