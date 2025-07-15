//routes.js
const express=require("express");
const mongoose=require("mongoose")
const router=express.Router();
const bookdb=require("../model/schema");
const app=express();

router.post("/admin",(req,res)=>{
    const {title,author,price,image}=req.body
    console.log(title,author,price,image)
    const result=new bookdb({
        title,
        author,
        price,
        image
    });
    result.save().then(()=>console.log("Data Save Successfully"));
    res.status(200).json({message:"Books Uploaded"})
})

router.get("/",async (req,res)=>{
    const books=await bookdb.find();
    // console.log(books);
    res.status(200).json({Allbooks:books});
})

module.exports=router;