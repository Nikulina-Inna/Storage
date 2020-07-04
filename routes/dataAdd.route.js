const {Router} = require("express");

const Item = require("../models/Item");
const router = Router();

router.post("/Item",
async(req, res) => {
    try {
        const candidate = await Item.findOne(req.body);

            if (candidate) {
                return res.status(400).json({message: "Данный товар уже существует"});
            }

        const item = new Item(req.body);

        await item.save();
        res.status(201).json({massage: "Товар успешно добавлен"});

    } catch(err) {
        res.status(500).json({message: "Ошибка добавления товара"});
    }
})

module.exports = router;