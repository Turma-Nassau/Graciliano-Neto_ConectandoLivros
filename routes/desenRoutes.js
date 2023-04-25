const { Router } = require('express');
const usercontroller = require('../controllers/desenController');
const router = Router();


router.post('/', desenController.criarDesenvolvedor);

router.get('/', desenController.verTodosDesenvolvedor);

router.get('/:id', desenController.verDesenvolvedorPorId);

router.patch('/:id', desenController.atualizarDesenvolvedor);

router.delete('/:id', desenController.deletarDesenvolvedor);

module.exports = router;