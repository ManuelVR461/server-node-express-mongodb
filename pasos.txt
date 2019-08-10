1.  creamos la carpeta del proyecto
2.  ejecutamos npm init --yes
4.  instalamos las dependencias necesarias: 
    npm install --save express mongan mongoose cors bcryptjs
    npm install nodemon -D
5.  iniciamos servicio de mongodb
6.  creamos una carpeta de server en nuestro proyecto y un archivo de index.js y database.js
7.  En el archivo index js hacemos esta configuracion:
    ---index.js---
    a. requerimos express: const express = require('express');
    b. creamos el objeto app: const app = express();
    c. establecemos el puerto 3000: app.set('PORT',process.env.PORT || 3000);
    d. creamos la funcion de inicio:
        app.listen(app.get('PORT'),()=>{
            console.log(`server iniciado desde el puerto ${app.get('PORT')}`);
        });
    e. luego de probar que la conexion inicia podemos llamar los complementos
    f. llamamos al complemento morgan que nos permite ver las solicitudes hechas
        en las url de la api: const morgan = require('morgan') ;
    g. Le establecemos en la seccion de middleware a express que use este modulo
        app.use(morgan('dev'));
    h. para hacer la conexion con la base de datos debemos configurar el archivo
        database.js creado por nosotros
8.  En el archivo database realizamos la siguiente configuracion:
    ----database.js-----
    a. requerimos el modulo mongoose: const mongoose = require('mongoose');
    b. indicamos la url de la conexion con nuestro servicio de base de datos
        const URI = 'mongodb://localhost/nombredatabase';
    c. realizamos la conexion:
        mongoose.connect(URI, {useNewUrlParser: true});
        mongoose.Promise = global.Promise;
    d. guardamos el objeto conexion y comprobamos si hubo error o si todo salio bien
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
        console.log('Base de Datos Conectado');
        });
    e. exportamos en modulo para poder llamarlos desde el index
        module.exports = mongoose;
    
9.  desde el index llamamos el modulo database para que ejecute la conexion:
    ----index.js----
    i. const { mongoose } = require('./database');
    j. si todo sale bien deberia mostrar en consola base de datos Conectado
    k. habilitamos en los middleware el modulo json de express para trabajar con
        estos objetos: app.use(express.json());

10. Ya con estos pasos tenemos el servidor corriendo y a la escucha
11. quedaria crear los controladores, modelos y rutas a las que tendra acceso el 
    frontend de cada componente. 

