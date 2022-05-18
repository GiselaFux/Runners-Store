const express = require("express");
const path = require("path");
const app = express();

/*requerimiento method reconocimiento de put y delete y su .use*/
const methodOverride = require("method-override")
app.use(methodOverride("_method"))
    /*requerimientos de rutas y use*/

const mainRouter = require('./src/routers/main');
const productsRouter = require('./src/routers/products');
app.use('/', mainRouter)
app.use('/products', productsRouter)

/*redireccionamiento a la carpeta public*/

app.use(express.static(path.join(__dirname, 'public')));
/*para poder trabajar con datos que se envían desde el formulario y capturarlo*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


// motor ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});