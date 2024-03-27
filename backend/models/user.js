const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShema = new Schema({
    name : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    regnum : {
        type : String,
        require : true
    }
})

const User = mongoose.model("User", UserShema);
module.exports = User;