const express = require('express');
require("./db/conn");
const User = require("./models/userMessage");
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
//setting the path
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");


// middleware
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine" , "hbs");
app.set("views",templatepath);

// routing 
app.get("/",(req,res)=>{
    res.render("index");
})


app.post("/Contact", async(req,res)=>{
    try{
       // res.send(req.body);
       const userData = new User(req.body);
      await userData.save();
      res.status(201).render("index");
    } catch(error) {
        res.status(500).send(error)
    }
})


app.listen(port,()=>{
    console.log(`Server is running on the ${port}`);
})