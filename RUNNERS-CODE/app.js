const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const path = require("path");
const app = express();
const fs= require('fs');

const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware")
const error404 = require("./src/middlewares/errorMiddleware");


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

//Para las APIs del dashboard
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

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


// API LISTA DE PRODUCTOS Y USUARIOS
const apiUsersRouter = require("./src/routers/api/apiUsersRoutes");
const apiProductsRouter = require("./src/routers/api/apiProductsRoutes");
const apiCategoriesRouter = require("./src/routers/api/apiCategoriesRoutes");
// API
app.use("/api/users", apiUsersRouter);

app.use("/api/products", apiProductsRouter);

app.use("/api/categories", apiCategoriesRouter);


app.listen(3000, () => {console.log("Servidor corriendo en el puerto 3000")});


/*ERROR 404*/

app.use(error404)