const router = require('express').Router();
const TODO = require("../models/Todo");

router.get("/", async(req, res)=>{
    let result = await TODO.find();
    // console.log(result);

    res.render("index",{fatchTodoData : result});
});

module.exports = router;


