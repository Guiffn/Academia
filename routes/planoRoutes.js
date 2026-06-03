import express from 'express';
import {
    createPlano,
    getPlanos,
    getPlanoById,
    updatePlano,
    deletePlano
} from '../Controllers/PlanoController.js';

const router = express.Router();

router.post('/', createPlano);
router.get('/', getPlanos);
router.get('/:id', getPlanoById);
router.put('/:id', updatePlano);
router.delete('/:id', deletePlano);

export default router;
