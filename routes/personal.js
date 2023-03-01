var express = require('express')
var router = express.Router()
var personalController = require ('../controllers/personal.c');


router.get('/', function(req, res, next) { 
  res.send(personalController.Obtener());
});

router.get("/:id", function(req, res, next) {
    res.send(personalController.ObtenerID(req.params.id));
  });

router.post('/', function(req, res, next) { 
  const personals = personalController.Agregar(req.body);
  res.send(personals);
});


router.patch("/:id", function(req, res, next) {
  res.send(personalController.ActualizarID(req.params.id , req.body));  
});

router.delete("/:id", function(req, res, next) {
  res.send(personalController.EliminarID(req.params.id));
});

module.exports = router;