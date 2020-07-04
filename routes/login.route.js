const {Router} = require("express");
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");
const router = Router();

router.get(
    "/login",
    [
        check("email", "Введен некорректный email").normalizeEmail().isEmail(),
        check("password", "Введите пароль").exists()
    ], 
    async (req, res) => {
    
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
                message: "Некорректные данные при входе"
            });
        }

        const {email, password} = req.query;
        const user = await User.findOne({email: email});
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!user && !isMatch) {
            return res.status(400).json({message: "Неверный email или пароль"});
        }

        const jwtSecret = config.get("jwtSecret");

        const token = jwt.sign(
            {userId: user.id},
            jwtSecret,
            {expiresIn: "1h"}
        );

        res.json({token, userId: user.id});

    
        res.status(500).json({message: "Ошибка, попробуйте снова"});
    
})

module.exports = router;