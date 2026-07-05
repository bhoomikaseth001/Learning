import express from "express"
import { Router } from "express";
import { home } from "../controllers/user.controllers.js";


const userRouter = express(Router())

userRouter.get("/", home)

userRouter.post("/create", async (req, res) => {
    try {
        const { username, password } = req.body
        const newUser = await User.create({
            username,
            password
        })
        res.status(201).json({ message: "user created successfully", user: newUser })
    }
    catch (error) {
        res.status(400).json({ message: error })
    }
})

//getting all the usernames
// app.get("/read", async (req, res) => {
//     try {
//         const users = await User.find()
//         res.status(200).json({ message: "users found", users })
//     }
//     catch (error) {
//         res.status(400).json({ message: error })
//     }
// })


// userRouter.get("/read/:username", async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.params.username })
//         res.status(200).json({ message: "user found", user })
//     }
//     catch (error) {
//         res.status(400).json({ message: error })
//     }
// })

//getting the specific user
userRouter.get("/read", async (req, res) => {
    try {
        //read about all the other $eq opertors
        const users = await User.find({ username: { $eq: "bhoomikaaa" } })
        res.status(200).json({ message: "users found", users })
    }
    catch (error) {
        res.status(400).json({ message: error })
    }
})

userRouter.put("/update/:id", async (req, res) => {

    try {
        let { username } = req.body
        let id = req.params.id
        let user = await User.findByIdAndUpdate(id, { username }, { new: true })
        res.status(200).json({ message: "user updated successfully", user })
    }
    catch (error) {
        res.status(400).json({ message: error })
    }

})
//similarly for updateOne


userRouter.delete("/delete/:id", async (req, res) => {
    try {
        let { id } = req.params
        let deletedUser = await User.findByIdAndDelete(id, { new: true })
        res.status(200).json({ message: "deleted successfully" })
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
})
//similarly for deleteOne

export default userRouter