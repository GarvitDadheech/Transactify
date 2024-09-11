const express = require("express");
const router = express.Router();
const {Account} = require("../db");
const { default: mongoose } = require("mongoose");
const { authMiddleware } = require("../middleware");
const { ObjectId } = mongoose.Types;

router.get("/balance",authMiddleware,async (req,res) => {

    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: account.balance
    })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession(); 
    try {
        session.startTransaction();
        
        const { amount, to } = req.body;
        const userId = new ObjectId(req.userId);
        console.log('Request User ID:', userId);
        
        // Find account with the correct userId
        const account = await Account.findOne({
            userId: userId
        }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            session.endSession(); 
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({
            userId: new ObjectId(to) 
        }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            session.endSession(); 
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        await Account.updateOne(
            { userId: userId },
            { $inc: { balance: -amount } }
        ).session(session); 

        await Account.updateOne(
            { userId: new ObjectId(to) },
            { $inc: { balance: amount } }
        ).session(session);

        await session.commitTransaction();
        session.endSession();

        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


module.exports = router;