import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

export const RegisterUser = async (req, res) => {

    try {
        const { userName, userEmail, userNumber, userPassword, } = req.body;

        if (!userName || !userEmail || !userNumber || !userPassword) {
            res.status(400).json({
                message: "All Fields Are Requred"
            })
        }

        const existingUser = await User.findOne({ where: { userEmail } })

        if (existingUser) {
            return res.status(400).json({
                message: "That user already exist with this email"
            })
        }

        const HashPassword = await bcrypt.hash(userPassword, 10)

        const newUser = new User({
            userName,
            userEmail,
            userNumber,
            userPassword: HashPassword,
        })

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User Register Successfully"
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Something went wrong during registration."
        })
    }
}

export const LoginUser = async (req, res) => {
    try {
        const { userEmail, userName, userPassword } = req.body;

        if (!userEmail || !userName || !userPassword) {
            res.status(400).json({
                message: 'All Fields Are Requred'
            })
        }

        const existingUser = await User.findOne({ where: { userEmail } })

        if (!existingUser) {
            res.status(400).json({
                message: "User Not Found"
            })
        }

        const isMatch = await bcrypt.compare(userPassword, existingUser.userPassword);

        if (!isMatch) {
            res.status(401).json({
                success: false,
                message: "Invlid Email & Passowrd "
            })
        }

        const token = jwt.sign({ id: existingUser.id, email: existingUser.userEmail },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )


        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded user id from token:", decoded.id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            success: true,
            message: "Login Successfully",
            user: {
                userId: decoded.id,
                userName: existingUser.userName,
                userEmail: existingUser.userEmail,
                userPassword: existingUser.userPassword,
            }
        })

    }
    catch (error) {
        console.log("error", error);

        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message
        })
    }
}

export const getUserAccounts = async(req, res) => {
    try {
        const allAccounts = await User.findAll()

        if (!allAccounts) {
            res.status(404).json({
                success: false,
                message: "Not Found The Accounts"
            })
        }

        res.status(201).json({
            message: "Find All Account Succssfully",
            allAccounts: allAccounts
        })


    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            success: false,
            message: "Somethink went wrong",
            error: error.message
        })
    }

}