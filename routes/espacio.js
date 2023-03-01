var express = require('express');
var router = express.Router();
var EspacioController = require('../controllers/espacio.c');

//Obtener espacios /espacio
router.get('/', function(req, res, next) {
  res.send(EspacioController.obtener());
});
//Obtener espacios por su id (/espacio/:id)
router.get("/:id", function(req, res, next) {
  res.send(EspacioController.ObtenerID(req.params.id));
});
//Agregar espacios (Metodo post)
router.post('/', function(req,res,next){
  const espacios = EspacioController.Agregar(req.body);
  res.send(espacios);
})
//Editar espacios mediante su ID /espacio/:id (Metodo patch)
router.put('/:id', function(req,res,next){
    res.send(EspacioController.ObtenerID(req.params.id, req.body)) //NO MODIFICAR
})
//Eliminar espacios mediante su id //espacio/:id (Metodo delete)
router.delete("/:id", function(req, res, next) {
  res.send(EspacioController.EliminarID(req.params.id));
});

module.exports = router;
