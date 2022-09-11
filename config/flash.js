//function for flash messages which will show are success and error
module.exports.setFlash = function (req, res, next) {
    res.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('error')
    }

    next(); 
}