let planos = [
    { id: 1, valor: 99.90, duracao: "Mensal", tipos: ["Basico"] },
    { id: 2, valor: 269.70, duracao: "Trimestral", tipos: ["Basico", "Premium"] },
    { id: 3, valor: 999.00, duracao: "Anual", tipos: ["Basico", "Premium", "VIP"] }
];

export const createPlano = async (data) => {
    if (!data.valor || !data.duracao) {
        throw new Error("Campos obrigatórios: valor, duracao");
    }
    const novoPlano = {
        id: planos.length + 1,
        valor: data.valor,
        duracao: data.duracao,
        tipos: data.tipos || ["Basico", "Premium", "VIP"]
    };
    planos.push(novoPlano);
    return novoPlano;
};

export const getPlanos = async () => {
    return planos;
};

export const getPlanoById = async (id) => {
    const plano = planos.find(p => p.id == id);
    if (!plano) throw new Error("Plano não encontrado");
    return plano;
};

export const updatePlano = async (id, data) => {
    const index = planos.findIndex(p => p.id == id);
    if (index === -1) throw new Error("Plano não encontrado");
    planos[index] = {
        ...planos[index],
        ...data
    };
    return planos[index];
};

export const deletePlano = async (id) => {
    const index = planos.findIndex(p => p.id == id);
    if (index === -1) throw new Error("Plano não encontrado");
    planos.splice(index, 1);
    return true;
};
