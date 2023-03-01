var express = require('express');
var router = express.Router();
var TrabajoController  = require("../controllers/Trabajo.js")


router.get('/', function(req, res, next) { 
  res.send(TrabajoController.Listar());
});


router.post('/', function(req, res, next) { 
  const Trabajos = TrabajoController.crear(req.body);
  res.send(Trabajos);
});


router.patch("/:id_trabajo", function(req, res, next) {
  res.send(TrabajoController.Actualizar(req.params.id_trabajo , req.body));  
});

 router.get("/:id_trabajo", function(req, res, next) {
   res.send(TrabajoController.Buscar(req.params.id_trabajo));
 });


router.delete("/:id_trabajo", function(req, res, next) {
  res.send(TrabajoController.Eliminar(req.params.id_trabajo));
});

module.exports = router;