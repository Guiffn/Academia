import * as alunoService from '../Service/ServiceAluno.js';

export const createAluno = async (req, res) => {
    try {
        const aluno = await alunoService.createAluno(req.body);
        res.status(201).json(aluno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAlunos = async (req, res) => {
    try {
        const alunos = await alunoService.getAlunos();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAlunoById = async (req, res) => {
    try {
        const aluno = await alunoService.getAlunoById(req.params.id);
        res.json(aluno);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const updateAluno = async (req, res) => {
    try {
        const aluno = await alunoService.updateAluno(req.params.id, req.body);
        res.json(aluno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteAluno = async (req, res) => {
    try {
        await alunoService.deleteAluno(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};