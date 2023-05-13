const { Router } = require('express');
const router = Router();

const { getPedidos, getPedido, createPedido, updatePedido, deletePedido } = require('../controllers/pedidos.controller')

router.route('/')
    .get(getPedidos)
    .post(createPedido)

router.route('/:id')
    .put(updatePedido)
    .delete(deletePedido)
    .get(getPedido)

module.exports = router;