const express = require('express');
const mongoose = require('mongoose');


const db = require('./config/keys').MongoURI;

const app = express();

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log('MongoDb connection is successful');
    }).catch((err) => {
        console.log(err);
    })


app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
    console.log(`Server is connected to the port ${3000}`);
});