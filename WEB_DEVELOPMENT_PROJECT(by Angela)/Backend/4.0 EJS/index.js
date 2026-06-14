import express from 'express';


const app = express();
const port = 3000;

app.get("/",(req, res)=>{
   const day= new Date().getDay();
   const isWeekend = day===0||day===6;

   res.render("index.ejs",{
    dayType:isWeekend?"the weekend":"a weekday",
    advice:isWeekend?"it's time to have fun":"it's time to work hard"
   });
});


app.listen(port,()=>{
    console.log(`Server is running on ${port}.`);
}); 