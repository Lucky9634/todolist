const express = require('express')
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 5000;

//connect mongodb Database

try{
    mongoose.connect("mongodb://localhost:27017/todos");
    console.log("Data base has Connected !")
}
catch{
    console.log("Data base has not Connected !")
}

// middlewear

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.use(require('./routes/index'));
app.use(require('./routes/Todo'));
app.use(require('./routes/delete'));






app.listen(PORT, (err) => {
    if(err){
        console.log('Your Port Provide Error');
    }
    console.log('Your Port has running Success Full!');
})