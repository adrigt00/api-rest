'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var UserController = require('../controllers/user');
// Llamamos al router
var api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/user/:id', UserController.getUser);
// Exportamos la configuración
module.exports = api;