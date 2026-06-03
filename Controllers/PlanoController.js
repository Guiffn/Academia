import * as planoService from '../Service/ServicePlano.js';

export const createPlano = async (req, res) => {
    try {
        const plano = await planoService.createPlano(req.body);
        res.status(201).json(plano);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPlanos = async (req, res) => {
    try {
        const planos = await planoService.getPlanos();
        res.json(planos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPlanoById = async (req, res) => {
    try {
        const plano = await planoService.getPlanoById(req.params.id);
        res.json(plano);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const updatePlano = async (req, res) => {
    try {
        const plano = await planoService.updatePlano(req.params.id, req.body);
        res.json(plano);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePlano = async (req, res) => {
    try {
        await planoService.deletePlano(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
