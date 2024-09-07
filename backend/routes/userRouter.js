const express = require('express');
const zod = require("zod");
const { User } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const bcrypt = require('bcrypt');

const signUpBody = zod.object({
    username: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

const loginBody = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post("/signup",async (req,res) => {
    const {success} = signUpBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Username already taken"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })

})

router.post("/login",async (req,res) => {
    const {success} = loginBody.safeParse(req.body);

    if(!success) {
        res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if(!user) {
        res.status(411).json({
            message: "User does not exists"
        })
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const token = jwt.sign({
        userId: user._id
    },JWT_SECRET);

    res.json({
        token: token
    })

}) 




module.exports = router;