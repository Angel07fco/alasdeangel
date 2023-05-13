const { Router } = require('express');
const router = Router();

const { getClientes, getCliente, createCliente, updateCliente, deleteCliente } = require('../controllers/clientes.controller')

router.route('/')
    .get(getClientes)
    .post(createCliente)

router.route('/:id')
    .put(updateCliente)
    .delete(deleteCliente)
    .get(getCliente)

module.exports = router;