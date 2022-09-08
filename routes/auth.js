const express = require('express');
const router = express.Router();

router.get('/user',(req,res)=>{
    res.render("<h1>Gyanendra Shah</h1>")
});

module.exports =router;