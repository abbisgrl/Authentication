const express = require('express');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts');
const passport = require('./config/passport');
const flash = require('connect-flash');
const session = require('express-session');
const customFlash = require('./config/flash');

const app = express();

//passport configuration 
require('./config/passport')(passport);
const db = require('./config/keys').MongoURI;


//mongodb connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log('MongoDb connection is successful');
    }).catch((err) => {
        console.log(err);
    })


//ejs configuration 
app.use(expressLayout);
app.use('/assets', express.static('./assets'));
app.set('view engine', 'ejs');

//body parser configuration
app.use(express.urlencoded({ extended: false }));


//express session configuration
app.use(
    session({
        secret:'secret',
        resave:true,
        saveUninitialized:true
    })
);


//passport middleware 
app.use(passport.initialize());
app.use(passport.session());


//connecting flash 
app.use(flash());

//global variables
app.use(customFlash.setFlash);

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


app.listen(3001, () => {
    console.log(`Server is connected to the port ${3001}`);
});