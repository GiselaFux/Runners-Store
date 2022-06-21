function guestMiddleware (req, res, next){
    if (req.session.userLogged){
        return res.redirect("/user/profile")/*crear vista de perfil*/ 
    }
    next();
}

module.exports = guestMiddleware