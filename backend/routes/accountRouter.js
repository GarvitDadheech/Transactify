const express = require("express");
const router = express.Router();
const Account = require("../db")

router.get("/balance",async (req,res) => {

    const account = await Account.findOne({
        userId: req.body.userId
    })

    res.json({
        balance: account.balance
    })
})


module.exports = router;