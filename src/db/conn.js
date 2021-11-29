const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ShashiDynamic").then((data)=>{
    console.log("Connection Successfuly");
}).catch((err)=>{                /// creating database
    console.log("Some error occured");
});