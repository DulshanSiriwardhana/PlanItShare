const express = require("express");
const router = express.Router();
const path = require("path");
const Plan = require("../models/plan");

router.get('/',async(req,res)=>{
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.get('/:userId',async(req,res)=>{
    try {
        const userId = req.params.userId;
        const plan = await Plan.find(userId);
        res.status(200).finaljson(plan);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.post('/add',(req,res)=>{
    const name = req.body.name;
    const key = req.body.key;
    const userId = req.body.userId;
    const text = req.body.text;

    const newPlan = new Plan({
        name,
        key,
        userId,
        text
    })
    newPlan.save().then(()=>{
        res.status(200).json(newPlan);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})
router.get('/:planId',async(req,res)=>{
    try {
        const planId = req.params.planId;
        const plan = await Plan.findById(planId);
        res.status(200).finaljson(plan);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;