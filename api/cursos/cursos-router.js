const express = require('express');
const controller = require('./cursos-controller');
const router = express.Router();

router.get('/', controller.findAll);

router.get('/:id', controller.findById);

router.post('/', controller.add);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;