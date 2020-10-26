/*#### Toda la información del router en un archivo separado####*/

const express = require('express');
const message = require('../components/message/network');

const routes = (server) =>{
    server.use('/message', message);    //cada vez que llamen a message se llama ese componente
}

module.exports = routes;