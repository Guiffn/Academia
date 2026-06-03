export default class Plano {
    constructor(valor, duracao, tipos = ["Basico", "Premium", "VIP"]) {
        this.valor = valor;
        this.tipos = tipos;
        this.duracao = duracao;
    }
}