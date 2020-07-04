var db = require('../db');

module.exports.getPer = function(req,res,next){
    var checkAdmin = db.get('users').find({id:req.signedCookies.user}).value();
    if(!checkAdmin.isAdmin){
        res.render('./permission/getPer');
        return;
    }
    next();
}