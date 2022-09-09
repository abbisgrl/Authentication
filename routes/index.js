const express = require('express');
const router = express.Router();
const {Authentication} = require('../config/Authentication');

router.get('/',(req,res)=>{
    res.render("welcome");
});

router.get('/dashboard',Authentication,(req,res)=>res.render('dashboard',{
    name:req.user.name
}));
module.exports =router;