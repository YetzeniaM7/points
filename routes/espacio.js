var express = require ('express');
var router = express.Router();
var EspacioController = require('../controllers/espacio.c');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(EspacioController.Obtener());
  });
  
  router.get("/:id", function(req, res, next) {
    res.send(EspacioController.ObtenerID(req.params.id));
  });
  
  router.post('/', function(req,res,next){
    const espacios = EspacioController.Agregar(req.body);
    res.send(espacios);
  })
  
  router.put('/:id', function(req,res,next){
      res.send(EspacioController.ActualizadID(req.params.id, req.body)) //NO MODIFICAR
  })
  
  router.delete("/:id", function(req, res, next) {
    res.send(EspacioController.EliminarID(req.params.id));
  });
  

module.exports = router
