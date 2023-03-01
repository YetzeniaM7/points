var express = require('express');
var router = express.Router();
var solicitanteController = require ('../controllers/solicitante.c');

//Obtener solicitantes /solicitante
router.get('/', function(req, res, next) { 
    res.send(solicitanteController.Obtener());
  });
  //Obtener solicitante por su id (/solicitante/:id)
  router.get("/:id", function(req, res, next) {
      res.send(solicitanteController.ObtenerID(req.params.id));
    });
  //Agregar solicitante (Metodo post)
  router.post('/', function(req, res, next) { 
    const solicitantes = solicitanteController.Agregar(req.body);
    res.send(solicitantes);
  });
  //Editar solicitante mediante su ID /solicitante/:id (Metodo patch)
  router.patch("/:id", function(req, res, next) {
    res.send(solicitanteController.ActualizarID(req.params.id , req.body));  
  });
  //Eliminar solicitante mediante su id /solicitante/:id (Metodo delete)
  router.delete("/:id", function(req, res, next) {
    res.send(solicitanteController.EliminarID(req.params.id));
  });

module.exports = router;