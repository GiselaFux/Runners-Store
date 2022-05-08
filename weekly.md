# DAILY/WEEKLY MEETINGS - EQUIPO _"RUNNERS STORE"_

## _SPRINT 3_


### 04 de Mayo de 2022

* Al bajar repositorio, faltaba crear la carpeta controllers y routers (Gisela ya lo tenía hecho, entonces lo subió).

* Había problemas con la página register, aparecía error al acceder a la misma. Durante el meeting se descubrió que era por un problema de rutas, por lo que se modificaron las rutas y se solucionó el problema.

* Se acuerda que cada uno vaya cargando en archivo weekly.md lo que va realizando, y si es que tiene algún problema para solucionarlo en cuanto nos juntemos nuevamente.

* Se reparten los puntos que faltan terminar del sprint y se actualiza esa información en tablero Trello.

* Nos encontramos con problemas para hacer correr el servidor, Gisela luego de la reunión lo pudo solucionar agregando _app.set('views', path.join(__dirname, 'views'))_ en archivo app.js.


### 05 de Mayo de 2022 (reunión en clase)

* Se terminan los _res.render()_ en mainController.js.

* Se solucionó un problema que habia con la vista _productDetail.ejs_ (al abrir la foto del producto, aparecía por debajo del header).

* Surgen dudas sobre la unificación de estilos generales, del header y del footer. Al hablar con Natalia, nos recomendó un método con el que podríamos solucionarlo. Luego, llegamos al acuerdo que ibamos a llevar a cabo la sugerencia de Natalia para poder unificarlos.


### 08 de Mayo de 2022

#### Julieta Paredes
* Se crea hoja de estilos generales en carpeta css y se asigna a todos los archivos ubicados en _views-products/users y a index.ejs_.

* Se crea archivo head.ejs en carpeta partial. Se incluye a todas los archivos ubicados en _views-products/users y a index.ejs_.

* Se modifican nombres de clases en todos los archivos en _views-products/users y a index.ejs_ y en sus respectivas hojas de estilo.

* Se modifica formato de archivo _retro.md_.

* Se agrega información sobre reuniones en archivo weekly, y tareas realizadas.

