var express = require('express');
var router = express.Router();
var ReservasController  = require("../controllers/Reserva.js")

//Obtener reservas /reserva
router.get('/', function(req, res, next) { 
  res.send(ReservasController.Listar());
});

//Obtener reservas por su id (/reserva/:id)
router.post('/', function(req, res, next) { 
  const Trabajos = ReservasController.crear(req.body);
  res.send(Reservas);
});

//Agregar reservas (Metodo post)
router.patch("/:id", function(req, res, next) {
  res.send(ReservasController.Actualizar(req.params.id , req.body));  
});
//Editar reservas mediante su ID /reserva/:id (Metodo patch)
 router.get("/:id", function(req, res, next) {
   res.send(ReservasController.Buscar(req.params.id));
 });

//Eliminar reservas mediante su id /reserva/:id (Metodo delete)
router.delete("/:id", function(req, res, next) {
  res.send(ReservasController.Eliminar(req.params.id));
});

module.exports = router;
