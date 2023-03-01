var express = require('express');
var router = express.Router();
var equipoController  = require("../controllers/equipo.c.js")

/* Get show function Listar in controllers*/
router.get('/', function(req, res, next) { 
  res.send(equipoController.Listar());
});

/*Post show function  Crear in controllers, for create records */
router.post('/', function(req, res, next) { 
  const equipos = equipoController.crear(req.body);
  res.send(equipos);
});

/* Patch show function Actualizar in controllers of equipos, for update records*/
router.patch("/:id", function(req, res, next) {
  res.send(equipoController.Actualizar(req.params.id , req.body));  
});

/* Get show function Buscar in controllers of equipos, for consult records*/
router.get("/:id", function(req, res, next) {
  res.send(equipoController.Buscar(req.params.id));
});

/*Delete for delete records*/
router.delete("/:id", function(req, res, next) {
  res.send(equipoController.Eliminar(req.params.id));
});

module.exports = router;