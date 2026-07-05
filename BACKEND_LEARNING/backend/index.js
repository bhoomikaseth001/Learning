// import express from "express";
// import cors from "cors";
// const app = express();

// app.use(cors({  //third-party middleware
//     origin: "http://localhost:5173"
// }))

// const port = 8000;

// app.get("/", (req, res) => {
//     res.json({ name: "bhoomika", age: "21" })
// })

// app.post("/", (req, res) => {
//     console.log(req.body)
//     res.send("data added successfully")
// })


// app.listen(port, () => {
//     console.log(`server is running at port ${port}`)
// })



// import express from "express";

// const app = express();
// app.use(express.json());

// const password = "hello123";


// app.use((req, res, next) => {  //custom middleware
//     if (req.body.pass != password) {
//         res.send("password does not match")
//     }
//     next();

// })


// const port = 8000;

// app.get("/", (req, res) => {
//     res.json({ name: "bhoomika", age: "21" })
// })

// app.post("/", (req, res) => {
//     console.log(req.body)
//     res.status(200).send({ sucess: true })
// })


// app.listen(port, () => {
//     console.log(`server is running at port ${port}`)
// })



import express from "express";

const app = express();
app.use(express.json());

const port = 8000;

app.get("/", (req, res) => {
    //console.log(req.headers);  //will give all the headers
    //console.log(req.get("user-agent")); // for specific header
    //---setting the header

    // res.set("x-username", "seth") //set the custom header
    //or
    res.header("x-age", "22")
    //we cannot remove a built-in header
    //removing a custom header
    res.removeHeader("x-powered-by")

    res.json({ name: "bhoomika", age: "21" })
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})