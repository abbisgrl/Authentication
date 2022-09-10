const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.get('/login', (req, res) => res.render('login'));

router.get('/forgot', (req, res) => res.render('forgot'));


router.get('/reset/:id', (req, res) => {
    res.render('reset', { id: req.params.id })
});

router.get('/register', (req, res) => res.render('register'));

router.post('/register', authController.registerHandle);

router.get('/activate/:token', authController.activateHandle);

router.post('/forgot', authController.forgotPassword);

router.post('/reset/:id', authController.resetPassword);

router.get('/forgot/:token', authController.gotoReset);

router.post('/login', authController.loginHandle);

router.get('/logout', authController.logoutHandle);

module.exports = router;