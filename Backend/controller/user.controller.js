import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { name, email, passwordd } = req.body
        const user = await User.findOne({ email_id: email })
        if (user) {
            return res.status(400).json({ message: "User already exists!" })
        }
        const hashPassword = await bcryptjs.hash(passwordd, 10)
        const createUser = new User({
            fullname: name,
            email_id: email,
            password: hashPassword
        })
        await createUser.save()
        res.status(201).json({ message: "User registered!", user:{
            _id:createUser._id,
            name:createUser.fullname,
            email:createUser.email_id
        } })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error!" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await User.findOne({ email_id: email })
        if(findUser) {
            const checkpassword = await bcryptjs.compare(password,findUser.password)
            if (checkpassword === true) {
                res.status(200).json({
                    message: "Login Successful", User: {
                        _id: findUser._id,
                        name: findUser.fullname,
                        email: findUser.email_id
                    }
                })
            }
            else{
                return res.status(400).json({message:"Invalid Credentials!"})
            }
        }
        else {
            return res.status(400).json({ message: "User not registered!" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error!" })
    }
}