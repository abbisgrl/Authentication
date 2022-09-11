const express = require('express');
const router = express.Router();
const {Authentication} = require('../config/Authentication');

//router for getting the homepage
router.get('/',(req,res)=>{
    res.render("welcome");
});

//router for teh dashboard open after authentication
router.get('/dashboard',Authentication,(req,res)=>res.render('dashboard',{
    name:req.user.name
}));
module.exports =router;