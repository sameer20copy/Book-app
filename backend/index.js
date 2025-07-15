//App.js
const express=require("express")
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const userRouter=require("./routes/routes")

app.use(cors());
app.use(express.json())
mongoose.connect("mongodb+srv://Books:as816@books.4fwjwy3.mongodb.net/?retryWrites=true&w=majority&appName=Books").then(console.log("Mongodb is connected"))
app.use("/",userRouter);

app.listen(3000,()=>{
    console.log("Server is running");
})
