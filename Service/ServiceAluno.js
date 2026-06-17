let alunos = [];

export const createAluno = async (data) => {
    if (!data.nome || !data.cpf || !data.plano) {
        throw new Error("Campos obrigatórios: nome, cpf, plano");
    }
    const novoAluno = {
        id: alunos.length + 1,
        nome: data.nome,
        cpf: data.cpf,
        plano: data.plano,
        cep: data.cep || null,
        endereco: data.endereco || null,
        ativo: data.ativo ?? true, 
        dataMatricula: data.dataMatricula || new Date()
    };
    alunos.push(novoAluno);
    return novoAluno;
};

export const getAlunos = async () => {
    return alunos;
};

export const getAlunoById = async (id) => {
    const aluno = alunos.find(a => a.id == id);
    if (!aluno) throw new Error("Aluno não encontrado");
    return aluno;
};

export const updateAluno = async (id, data) => {
    const index = alunos.findIndex(a => a.id == id);
    if (index === -1) throw new Error("Aluno não encontrado");
    alunos[index] = {
        ...alunos[index],
        ...data
    };
    return alunos[index];
};

export const deleteAluno = async (id) => {
    const index = alunos.findIndex(a => a.id == id);
    if (index === -1) throw new Error("Aluno não encontrado");
    alunos.splice(index, 1);
    return true;
};

export const buscarEnderecoPorCep = async (cep) => {
    const cepLimpo = cep.replace(/\D/g, '');
    
    if (!cepLimpo || cepLimpo.length !== 8) {
        throw new Error("CEP inválido");
    }
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();
        
        if (data.erro) {
            throw new Error("CEP inválido");
        }
        
        return {
            cep: data.cep,
            logradouro: data.logradouro,
            numero: data.numero || '',
            complemento: data.complemento || '',
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
        };
    } catch (error) {
        throw new Error("CEP inválido");
    }
};