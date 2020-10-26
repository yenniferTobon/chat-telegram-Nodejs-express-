/*#######Archivo para las rutas de los mensajes ######### */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{ console.log(res.bodyParser.json())});  // solo atiende las peticiones get.
/* 1. console.log(req.query)  y en la url ?orderBy=id   // Querys
   2. console.log(req.headers);   // para mirar todas las cabeceras
   3. res.header({"custom.header": "nuestro valor"}); //para personalizar las cabaceras
   4. res.status(201).send({'error': 'te equivocaste'});  // para personalizar las respuestas.*/


module.exports = router;    // exportando el router