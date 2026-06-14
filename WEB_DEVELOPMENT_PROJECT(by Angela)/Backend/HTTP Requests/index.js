import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello,  World");
});

app.get('/about',(req,res)=>{
    res.send("<h1>About Me</h1><p>My name is Bhoomiika</p>");
});

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Me</h1><p>Phone no.: 94379273973</p>");
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}.`);
});