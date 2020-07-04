const {Router} = require("express");
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator");

const User = require("../models/User");
const router = Router();

router.post(
    "/register",
    [
        check("email", "Некорректный email").isEmail(),
        check("password", "Некорректный пароль").isLength({min:6}),
        check("phone").isLength(11)
    ],
     async (req, res) => {
    try {
        const error = validationResult(req);
        const {email, password, name, lastName, phone, adress} = req.body;
        const candidate = await User.findOne({email: email});

        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
                message: "Некорректные данные при регистрации"
            });
        }

        if (candidate) {
            return res.status(400).json({message: "Данная электронная почта уже используется"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email: email, password: hashedPassword,
        name: name, lastName: lastName, phone: phone, adress: adress,
        isAdmin: false});
        await user.save();
        res.status(201).json({massage: "Пользователь успешно добавлен"});

    } catch (err) {
        res.status(500).json({message: "Ошибка, попробуйте снова"});
    }
})

module.exports = router;