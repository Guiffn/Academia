// ==========================================
// ARQUIVO DE TESTES - ACADEMIA API
// ==========================================
// Você pode copiar e colar os JSONs abaixo diretamente no Thunder Client.

const testes = {
  
  // ==========================================
  // ROTAS DE ALUNOS
  // ==========================================

  alunos: {
    // 1. CRIAR ALUNO
    // Método: POST
    // URL: http://localhost:3000/alunos
    criarAluno: {
      "nome": "João da Silva",
      "cpf": "123.456.789-00",
      "plano": "Premium",
      "cep": "01001-000",
      "endereco": "Praça da Sé"
    },

    // 2. ATUALIZAR ALUNO
    // Método: PUT
    // URL: http://localhost:3000/alunos/1
    atualizarAluno: {
      "nome": "João da Silva Alterado",
      "ativo": false,
      "plano": "VIP"
    }
  },

  // ==========================================
  // ROTAS DE PLANOS
  // ==========================================

  planos: {
    // 3. CRIAR PLANO
    // Método: POST
    // URL: http://localhost:3000/planos
    criarPlano: {
      "valor": 150.00,
      "duracao": "Semestral",
      "tipos": ["Basico", "Premium"]
    },

    // 4. ATUALIZAR PLANO
    // Método: PUT
    // URL: http://localhost:3000/planos/1
    atualizarPlano: {
      "valor": 120.00,
      "duracao": "Mensal"
    }
  }
};
