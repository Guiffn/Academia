import * as alunoService from '../Service/ServiceAluno.js';

export const createAluno = async (req, res) => {
    try {
        let dados = { ...req.body };
        
        // Se houver CEP, buscar o endereço automaticamente
        if (dados.cep) {
            const endereco = await alunoService.buscarEnderecoPorCep(dados.cep);
            dados.endereco = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`;
        }
        
        const aluno = await alunoService.createAluno(dados);
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

export const buscarCep = async (req, res) => {
    try {
        const endereco = await alunoService.buscarEnderecoPorCep(req.params.cep);
        res.json(endereco);
    } catch (error) {
        res.status(400).json({ erro: true, message: error.message });
    }
};