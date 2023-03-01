var express = require('express');
var router = express.Router();
var ReservasController  = require("../controllers/Reserva.js")


router.get('/', function(req, res, next) { 
  res.send(ReservasController.Listar());
});


router.post('/', function(req, res, next) { 
  const Trabajos = ReservasController.crear(req.body);
  res.send(Reservas);
});


router.patch("/:id", function(req, res, next) {
  res.send(ReservasController.Actualizar(req.params.id , req.body));  
});

 router.get("/:id", function(req, res, next) {
   res.send(ReservasController.Buscar(req.params.id));
 });


router.delete("/:id", function(req, res, next) {
  res.send(ReservasController.Eliminar(req.params.id));
});

module.exports = router;