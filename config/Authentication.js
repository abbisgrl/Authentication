//functions for authentication of the user with data
module.exports = {
    Authentication:function (req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error','Please log in first');
        res.redirect('/auth/login');
    },
    Authentication1: function(req,res,next){
        if(!req.isAuthenticated()){
            return next();
        }
        res.redirect('/dashboard');
    }
};