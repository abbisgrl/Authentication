const express = require('express');
const router = express.Router();

//importing the authcontroller for the various function
const authController = require('../controllers/authController');

//login url page
router.get('/login', (req, res) => res.render('login'));

//forgot url page
router.get('/forgot', (req, res) => res.render('forgot'));

//reset url page
router.get('/reset/:id', (req, res) => {
    res.render('reset', { id: req.params.id })
});

//register url page
router.get('/register', (req, res) => res.render('register'));

//post url for register the url in the database
router.post('/register', authController.registerHandle);

//url for getting the activation token in the gmail
router.get('/activate/:token', authController.activateHandle);

//router for sending the data from forgot page
router.post('/forgot', authController.forgotPassword);

//router for sending the data from reset page
router.post('/reset/:id', authController.resetPassword);

//router for getting the forgot token in gmail
router.get('/forgot/:token', authController.gotoReset);

//router for sending the data from login page
router.post('/login', authController.loginHandle);

//router for logout of the user
router.get('/logout', authController.logoutHandle);

module.exports = router;