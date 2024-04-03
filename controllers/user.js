const User = require("../models/User");
const Expense = require("../models/expense")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const env = require('dotenv').config()
exports.addUser = async (req, res, next) => {

    try {
        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
        });
    } catch (err) {
        console.log(err)
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.verifyUser = async (req, res, next) => {

    try {
        const username = req.body?.username
        const password = req.body?.password
        console.log(password)
        const user = await User.findOne({ username: username })

        const areCredsCorrect = await bcrypt.compare(password, user.password)
        if (user === null) {
            return res.status(201).json({
                message: "User not present"
            });
        }
        if (areCredsCorrect === null) {
            return res.status(201).json({
                message: "Invalid Credentials"
            });
        }
        const token = jwt.sign({
            userId: user._id,
            username: user.username
        }, process.env.SECRET, { expiresIn: '24h' })

        return res.status(201).json({
            success: true,
            data: {username,token}
        });

    } catch (err) {
        console.log(err)
        //   if(err.name === 'ValidationError') {
        //     const messages = Object.values(err.errors).map(val => val.message);

        //     return res.status(400).json({
        //       success: false,
        //       error: messages
        //     });
        //   } else {
        //     return res.status(500).json({
        //       success: false,
        //       error: 'Server Error'
        //     });
        //   }
    }
}

