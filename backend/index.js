const express = require("express");
const app = express();
const main = require("./config/dbConnnection")
require("dotenv").config();
const authRouter = require("./route/authrouter");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello from the server")
})

app.use("/auth",authRouter);

main().then((res)=>{
    console.log("Database connection successfull")
}).catch((err)=>{console.log("Failed to connect to database.. reason : ",err.message)})
app.listen(PORT,()=>{
    console.log("listening on Port: ",PORT);
})