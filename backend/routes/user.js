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
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        firstname,
        lastname,
        password,
        email
    })
    newUser.save().then(()=>{
        res.status(200).json(newUser);
    }).catch((err)=>{
        res.status(500).json(err);
    })
})
router.get('/:userId',async(req,res)=>{
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.status(200).finaljson(user);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;