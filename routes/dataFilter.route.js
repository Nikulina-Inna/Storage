const {Router} = require("express");


const Item = require("../models/Item");
const router = Router();



router.get("/Item",
async(req, res) =>{
    try {
        const {itemClass, subClass, color, size, name, newItem} = req.query;
        let sizeFilter;
        let subClassFilter;
        let colorFilter;
        let itemClassFilter;
        let newFilter;

        if (itemClass === "all") {
            itemClassFilter = {$ne: itemClass};
        } else {
            itemClassFilter = itemClass;
        }

        if (subClass === "all") {
            subClassFilter = {$ne: size};
        } else {
            subClassFilter = subClass;
        }

        if (size === "all") {
            sizeFilter = {$ne: size};
        } else {
            sizeFilter = {$in: size};
        }

        if (color === "all") {
            colorFilter = {$ne: color};
        } else {
            colorFilter = {$in: color};
        }

        if (name === "all") {
            nameFilter = {$ne: name};
        } else {
            nameFilter = {$in: name};
        }

        if (newItem === "false") {
            newFilter = {$ne: ""}
        } else {
            newFilter = newItem;
        }

        const newData = await Item
        .find({itemClass: itemClassFilter, subClass: subClassFilter, 
        size: sizeFilter, color: colorFilter, name: nameFilter, 
        newItem: newFilter});
        

            if (newData.length) {
                res.status(201).json( {lendth: newData.length, newData});
            } else {
                res.status(400).json({message: "Ничего нет"});
            }
    } catch {
        res.status(500).json({message: "Ошибка при поиске товаров в базе"});
    }

})

module.exports = router;