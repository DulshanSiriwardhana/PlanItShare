const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShema = new Schema({
    firstname : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    }
})

const User = mongoose.model("User", UserShema);
module.exports = User;