import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import userRouter from "./routes/user.route.js";
dotenv.config()
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/", userRouter); //this ensures that any request starting with "/" goes to userRouter
//or 
//app.use("/api", userRouter);
app.listen(port, () => {
    connectDb()
    console.log(`server is running at port ${port}`)
})
