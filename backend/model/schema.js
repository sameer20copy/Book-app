const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    title:String,
    author:String,
    price:String,
    image:String,
});

module.exports=mongoose.model("Books",userSchema);