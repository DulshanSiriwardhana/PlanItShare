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
router.post('/add',(req,res)=>{
    const name = req.body.name;
    const password = req.body.password;
    const regnum = req.body.regnum;

    const newUser = new User({
        name,
        password,
        regnum
    })
    newPlan.save().then(()=>{
        res.status(200).json(newUser);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})
router.get('/:userId',async(req,res)=>{
    try {
        const userId = req.params.userId;
        const user = await Plan.findById(userId);
        res.status(200).finaljson(user);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;