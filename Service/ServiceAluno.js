let alunos = []

exports.createAluno = async (data)=>{
    if(!data.nome || !data.cpf || !data.plano){
        throw new Error("Campos obrigatórios: nome, cpf, plano")
    }
    const novoAluno={
        id:alunos.length+1,
        nome: data.nome,
        cpf: data.cpf,
        plano: data.plano,
        cep: data.cep || null,
        endereco: data.endereco || null,
        ativo: data.ativo ?? true, 
        dataMatricula: data.dataMatricula || new Date()
    }
    alunos.push(novoAluno)
    return novoAluno
}

exports.getAlunos= async()=>{
    return alunos
}

exports.getAlunosById = async (id)=>{
    const aluno = alunos.find(a=>a.id==id)
    if(!aluno)throw new Error("Aluno não encontrado")
    return aluno
}

exports.updateAluno = async(id,data)=>{
    const index = alunos.findIndex(a=>a.id==id)
    if(index===-1)throw new Error("Aluno não encontrado")
    alunos[index]={
    ...alunos[index],
    ...data
    }
    return alunos[index]
}

exports.deleteAluno = async(id)=>{
    const index= alunos.findIndex(a=> a.id==id)
    if(index===-1)throw new Error("Aluno não encontrado")
        alunos.splice(index, 1)
        return true
}