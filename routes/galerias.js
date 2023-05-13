const { Router } = require('express');
const router = Router();

const { getGalerias, getGaleria, createGaleria, updateGaleria, deleteGaleria } = require('../controllers/galerias.controller')

router.route('/')
    .get(getGalerias)
    .post(createGaleria)

router.route('/:id')
    .put(updateGaleria)
    .delete(deleteGaleria)
    .get(getGaleria)

module.exports = router;