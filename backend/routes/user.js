const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/user");

router.get('/',async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;