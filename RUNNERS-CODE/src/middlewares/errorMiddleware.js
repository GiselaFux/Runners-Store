
function error404 (req, res, next) {
    let error = new Error(),
    locals = res.render("./src/views/error.ejs")

    error.status = 404
    res.render("error", locals)

    next()
}



module.exports = error404;