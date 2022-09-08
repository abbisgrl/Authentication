const express = require('express');
const router = express.Router();

router.get('/sign',(req,res)=>{
    res.render("<h1>Gyanendra Shah sign</h1>")
});

module.exports =router;