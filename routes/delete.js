const router = require('express').Router();

const TODO = require("../models/Todo");


router.get('/detele/data/:_id', async(req, res)=>{
    let {_id} = req.params;
    // console.log(_id);
    let result = await TODO.deleteOne({_id});
    console.log(result);
    res.redirect('/');

});

module.exports = router;