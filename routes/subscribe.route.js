const {Router} = require("express");
const {check, validationResult} = require("express-validator");

const Email = require("../models/Email");
const router = Router();

router.post(
    "/subscribe",
    [
        check("email", "Некорректный email").isEmail()
    ],
    async (req, res) => {
        
            const error = validationResult(req);
            const email = req.body.email;
            console.log(email)
            const candidate = await Email.findOne({email: email});
            
            if (!error.isEmpty()) {
                return res.status(400).json({
                    error: error.array(),
                    message: "Некорректный email"
                });
            }
            
            if (candidate) {
                return res.status(400).json({message: "email уже используется"});
            }

            const newEmail = new Email({email: email});
            newEmail.save();
            res.status(201).json({massage: "Успешная подписка"});
        }
    
)


module.exports = router;