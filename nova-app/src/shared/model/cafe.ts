export class Cafe {
    nome: string | null;
    valor: number | null;
    tipo: string | null;

    constructor(nomeInput: null, valorInput: null, tipoInput: null) {
        this.nome = nomeInput;
        this.valor = valorInput;
        this.tipo = tipoInput;
    }
}