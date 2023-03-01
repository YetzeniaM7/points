var express = require('express');
var router = express.Router();
var solicitanteController = require ('../controllers/solicitante.c');

router.get('/', function(req, res, next) { 
    res.send(solicitanteController.Obtener());
  });
  
  router.get("/:id", function(req, res, next) {
      res.send(solicitanteController.ObtenerID(req.params.id));
    });
  
  router.post('/', function(req, res, next) { 
    const solicitantes = solicitanteController.Agregar(req.body);
    res.send(solicitantes);
  });
  
  router.patch("/:id", function(req, res, next) {
    res.send(solicitanteController.ActualizarID(req.params.id , req.body));  
  });
  
  router.delete("/:id", function(req, res, next) {
    res.send(solicitanteController.EliminarID(req.params.id));
  });

module.exports = router;