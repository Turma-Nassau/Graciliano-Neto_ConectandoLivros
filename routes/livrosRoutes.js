const { Router } = require('express');
const usercontroller = require('../controllers/livrosController');
const router = Router();


router.post('/', livroscontroller.criarLivros);

router.get('/', livroscontroller.verTodosLivros);

router.get('/:id', livroscontroller.verLivrosPorId);

router.patch('/:id', livroscontroller.atualizarLivros);

router.delete('/:id', livroscontroller.deletarLivros);

module.exports = router;