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
router.post('/login',async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    try{
        const user = await User.findOne({email});
        if(user){
            if(password === user.password){
                res.status(200).json({status:"success", user});
                console.log('password correct');
            } else{
                console.log('password incorrect');
                res.status(401).json({ status: "Incorrect password" });
            }
        } else{
            console.log('user does not exist');
            res.status(404).json({ status: "User not found" });
        }
    } catch (err) {
        console.log('error');
        res.status(500).json({ status: "Error with login" });
    }
})


module.exports = router;