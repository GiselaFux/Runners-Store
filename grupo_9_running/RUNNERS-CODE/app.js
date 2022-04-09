let express = require("express");
const path = require("path");
let app = express();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

