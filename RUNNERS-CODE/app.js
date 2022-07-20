const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const path = require("path");
const app = express();
const fs= require('fs');

const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware")

/*requerimiento method reconocimiento de put y delete*/
const methodOverride = require("method-override")

/*redireccionamiento a la carpeta public*/
app.use(express.static(path.join(__dirname, '/public')));

/* Session */ 
app.use(session({
    secret: "Sesión secreta",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);


/*para poder trabajar con datos que se envían desde el formulario y capturarlo*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride("_method")); /*metodo para el reconocimiento del put y delete*/

// motor ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views")); // Define la ubicaciónn de la carpeta de las Vistas

    /*requerimientos de rutas y use*/

const mainRouter = require('./src/routers/main');
const productsRouter = require('./src/routers/products');
const userRouter= require('./src/routers/user')
app.use('/', mainRouter)
app.use('/products', productsRouter)
app.use('/users', userRouter);



/*middleware error para toda la app*/
app.use((req,res,next)=>{
    res.status(404).render('not found');
    next()
})






app.listen(3009, () => {
    console.log("Servidor corriendo en el puerto 3000")
});