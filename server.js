const express = require('express');
/*const router = express.Router();  router nos permite separar las cabeceras, urls */
/*const router = require('./components/message/network');*/
const app = express();  //inicializar express.

const router = require('./network/routes');
const bodyParser = require('body-parser');


const response = require('./network/response');

/*app.use('/', function(req, res){   // La aplicación de express estará escuchando con cualquier url y nos devolvera yenn
    res.send('Yenn');
});*/

//app.use(router);  //añadir router a la aplicación de express

router(app);


app.listen(3000);  // por aca escucha.

console.log('la aplicación esta escuchando por http://localhost:3000');