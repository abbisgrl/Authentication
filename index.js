const express = require('express');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts');


const app = express();

const db = require('./config/keys').MongoURI;


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log('MongoDb connection is successful');
    }).catch((err) => {
        console.log(err);
    })



app.use(expressLayout);
app.use('/assets',express.static('./assets'));
app.set('view engine','ejs');



app.use(express.urlencoded({extended:false}));


app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


app.listen(3001, () => {
    console.log(`Server is connected to the port ${3001}`);
});