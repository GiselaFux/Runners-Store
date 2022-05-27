# DAILY/WEEKLY MEETINGS - EQUIPO _"RUNNERS STORE"_

## _SPRINT 3_

### Gisela Fux

Instaló el ejs, armado de carpetas que faltaban y archivo weekly.

### 04 de Mayo de 2022

- Al bajar repositorio, faltaba crear la carpeta controllers y routers (Gisela ya lo tenía hecho, entonces lo subió)

- Había problemas con la página register, aparecía error al acceder a la misma. Durante el meeting se descubrió que era por un problema de rutas, por lo que se modificaron las rutas y se solucionó el problema.

- Se acuerda que cada uno vaya cargando en archivo weekly.md lo que va realizando, y si es que tiene algún problema para solucionarlo en cuanto nos juntemos nuevamente.

- Se reparten los puntos que faltan terminar del sprint y se actualiza esa información en tablero Trello.

- Nos encontramos con problemas para hacer correr el servidor, Gisela luego de la reunión lo pudo solucionar agregando _app.set('views', path.join(\_\_dirname, 'views'))_ en archivo app.js.

### 05 de Mayo de 2022 (reunión en clase)

- Se terminan los _res.render()_ en mainController.js.

- Se solucionó un problema que habia con la vista _productDetail.ejs_ (al abrir la foto del producto, aparecía por debajo del header).

- Surgen dudas sobre la unificación de estilos generales, del header y del footer. Al hablar con Natalia, nos recomendó un método con el que podríamos solucionarlo. Luego, llegamos al acuerdo que ibamos a llevar a cabo la sugerencia de Natalia para poder unificarlos.

### 06 de Mayo de 2022

### Gisela Fux
Realiza los partials y los inserta en los archivos .ejs

### 07 de Mayo de 2022

#### Ezequiel Brunori

- Se crea dentro de la carpte products la vista "productCreate.ejs" con formularios para que usuarios administradores puedan crear productos

- Se agrega en el archivo main.js de la carpeta routers, la ruta "/productCreate" y su respectivo controlador

- Se agrega en el archivo mainController.js de la carpeta controllers, el objeto "productCreate", en donde asociamos la vista del punto anterior para que se envíe cuando el usuario ingresa a la ruta correspondiente

- Se realizaron algunos ajustes en el formato del header

### 08 de Mayo de 2022

#### Julieta Paredes

- Se crea hoja de estilos generales en carpeta css y se asigna a todos los archivos ubicados en _views-products/users y a index.ejs_.

- Se crea archivo head.ejs en carpeta partial. Se incluye a todas los archivos ubicados en _views-products/users y a index.ejs_.

- Se modifican nombres de clases en todos los archivos en _views-products/users y a index.ejs_ y en sus respectivas hojas de estilo.

- Se modifica formato de archivo _retro.md_.

- Se agrega información sobre reuniones en archivo weekly, y tareas realizadas.

### 08 de mayo de 2022

### Patricio Contartese

-Se crea el archivo productEdit.ejs dentro de la carpeta products, con el respectivo formulario para que el administrador pueda editar sus productos.

-Se agrega la ruta hacia el archivo productEdit.ejs dentro de routers con su controlador.

-En el mainController.js se crea el objeto productEdit.

### 09 de mayo de 2022

-Actualizo pagina de edicion de producto para el administrador




## _SPRINT 4_

#### Julieta Paredes
 Trabaja sobre modificaciones en la página principal.Carruseles( tres tipos diferentes)

### 16 de Mayo de 2022

### Gisela Fux

Creación de carpeta JSON dataBase con sus archivos: 
•	Products.json ( con su array de objetos)
•	Users.json ( con su array de objetos)

En la carpeta Controllers:
Agregó el archivo productsController;
Con sus requerimientos y sus métodos(indexProducts, delete y storage).
Hizo algunos de ellos
Puso la ruta del controller y app.use en app.js
Requerió path, fs, le dijo dónde buscarlos productos(json).
Modificó el mainController.
En las rutas:
Hizo la ruta de products.js.
Instaló Multer
Requerió y definió la variable que será middleware.
Agregó en los formularios enctype, para qué lea distintos archivos

### 20 de Mayo de 2022
### Gisela Fux
Trabaja sobre archivo nuevo para todos los productos y realiza su hoja css.

### 22 de Mayo de 2022
### Gisela Fux   
#### Julieta Paredes

Reunión con Julieta Paredes para solucionar tema de rutas.
Quedó funcionando.

### 25 de Mayo de 2022
#### Ezequiel Brunori
- Realizó página de productos y Css.
- Modificó archivo Header para el correcto funcionamiento del css. 
- Realizó el método de creación, edición y detalle de producto.

### Gisela Fux #### Ezequiel Brunori
Reunión  Ezequiel hizo otra página de productos  con su css .Trabajamos sobre el Productscontroller

#### Julieta Paredes ### Patricio Contartese ### Gisela Fux 
Reunión para trabajar sobre lo que falta.


### 26 de Mayo de 2022
#### Julieta Paredes
- Se agrega ruta en controller carrito
- Se cambia ruta en partial de header (en el icono de carrito)
- Se cambia ruta del boton editar en products.ejs.
- Se agregan botones de edición y delete en todos los productos en products.ejs
- Se agregan [] en propiedad de newProduct-imagen (para que ingrese las imagenes dentro de un array, y asi las lea).
- Se borran rutas del mainController que ya se encuentran en productsController
- Se agrega ruta productCart al mainController, y se agrega ruta al main.js

#### Julieta Paredes - Gisela Fux - Federico Correa
- Nos reunimos para terminar el edit y delete.



