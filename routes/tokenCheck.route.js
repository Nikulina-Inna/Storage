const {Router} = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router();

router.get(
    "/tokenCheck",
    async (req, res) => {
        try {
            const jwtSecret = config.get("jwtSecret");
            const token = req.query.token;
            const check = jwt.verify(token, jwtSecret);
            
            res.status(200).json(check.userId);
        } catch {
            res.status(400).json({message: "Для совершения данного действия необходимо авторизоваться"});
        }

    })

module.exports = router;