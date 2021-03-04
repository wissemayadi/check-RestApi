const mongoose = require('mongoose');

const config=require("config");

const connectDB=()=>{
mongoose.connect(config.get("MONGO_URI"),{
useUnifiedTopology:true,
useNewUrlParser:true

}).then(console.log("mongoose is connected"))

}

module.exports =connectDB;