let express = require("express");
const path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath))

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});



