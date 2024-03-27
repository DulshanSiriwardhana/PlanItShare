const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanShema = new Schema({
    name : {
        type : String,
        require : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    text : {
        type : String,
        require : true
    }
})

const Plan = mongoose.model("Plan", PlanShema);
module.exports = Plan;