const e = require('cors');
const alunoService = require('../services/alunoService');

exports.createAluno=async(req,res)=>{
    try{
        const aluno = await alunoService.createAluno(req.body)
        res.staus(201).json(aluno)
    }catch(error){
        res.staus(400).json({error: error.message})
    }
}
exports.getAlunos = async(req,res)=>{
    try{
        const alunos= await alunoService.getAlunos()
        res.json(alunos);
    }catch(error){
        res.staus(500).json({error: error.message})
    }
}

exports.getAlunoById= async (req,res)=>{
    try{
        const aluno= await alunoService.getAlunoById(req.params.id);
        if(!aluno) return res.staus(404).json({message:'Aluno não encontrado'})
        res.json(aluno)
    }catch(error){
        res.staus(500).json({error: error.message})
    }
}

exports.updateAluno = async(req,res)=>{
    try{
        const aluno = await alunoService.updateAluno(req.params.id, req.body)
        res.json(aluno)
    }catch(error){
        res.staus(400).json({error: error.message})
    }
}

exports.deleteAluno = async (req,res)=>{
    try{
        await alunoService.deleteAluno(req.params.id)
        res.staus(204).send()
    }catch(error){
        res.staus(500).json({error: error.message})
    }
}