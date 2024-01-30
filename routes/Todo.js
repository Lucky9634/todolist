const router = require('express').Router();

const TODO = require("../models/Todo");


router.post("/add/details", async(req, res)=>{
   const {text, select, date} = req.body;
   console.log(text, select, date);
   let itemTodo = new TODO({text, select, date});
   let result = await itemTodo.save();
   console.log(result);

   res.redirect('/');
});


module.exports = router;