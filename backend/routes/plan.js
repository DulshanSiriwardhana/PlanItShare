const express = require("express");
const router = express.Router();
const path = require("path");
const Plan = require("../models/plan");

router.get('/',async(req,res)=>{
    try {
        const plans = await Plan.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;