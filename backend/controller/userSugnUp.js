const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');


async function userSignUpController(req, res){
    try{
        const {email, password, name} = req.body

        if (!email){
            throw new Error("please provide email")
        }
        if (!password){
            throw new Error("please provide password")
        }
        if (!name){
            throw new Error("please provide name")
        }

        const user = await userModel.findOne({email})
        if (user){
            throw new Error("user already exists")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword){
            throw new Error("password hashing failed")
        }

        const payload = {
            ...req.body,
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = userData.save()

        res.status(201).json({
            message: "user created successfully",
            data: saveUser,
            error: false,
            success: true,
        })


    }catch(err){
        res.json({
            message : err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController