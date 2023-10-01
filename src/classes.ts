//atividade 1
export class Item {
    nome: string;
    descricao: string;
    valor: number;

    constructor(nome: string, descricao: string, valor: number) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }
}

export class Pedido {
    itens: Item[] = [];
    valorTotal: number = 0;

    adicionarItem(item: Item): void {
        this.itens.push(item);
        this.valorTotal += item.valor;
    }

    removerItem(item: Item): void {
        const index = this.itens.indexOf(item);
        if (index !== -1) {
            this.itens.splice(index, 1);
            this.valorTotal -= item.valor;
        }
    }

    listarItens(): void {
        for (const item of this.itens) {
            console.log(`Nome: ${item.nome}, Descrição: ${item.descricao}, Valor: ${item.valor}`);
        }
    }
}


//atividade 2
export class FormatoDeElemento {
    desenhar(): void {
        console.log("Desenhando elemento");
    }

    redimensionar(): void {
        console.log("Redimensionando elemento");
    }
}

export class Circulo extends FormatoDeElemento {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    desenhar(): void {
        console.log(`Desenhando um círculo com raio ${this.raio}`);
    }

    redimensionar(): void {
        console.log(`Redimensionando o círculo com raio ${this.raio}`);
    }
}

export class Retangulo extends FormatoDeElemento {
    comprimento: number;
    altura: number;

    constructor(comprimento: number, altura: number) {
        super();
        this.comprimento = comprimento;
        this.altura = altura;
    }

    desenhar(): void {
        console.log(`Desenhando um retângulo com comprimento ${this.comprimento} e altura ${this.altura}`);
    }

    redimensionar(): void {
        console.log(`Redimensionando o retângulo com comprimento ${this.comprimento} e altura ${this.altura}`);
    }
}


//atividade 3
console.log("Atividade 3:");

export class Animal {
    constructor(private nome: string, private idade: number) { }

    fazerBarulho(): void {
        console.log("O animal faz algum barulho.");
    }

    mover(): void {
        console.log("O animal se move de alguma forma.");
    }

    alimentar(): void {
        console.log("O animal se alimenta.");
    }

    dormir(): void {
        console.log("O animal dorme.");
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }
}

export class Cachorro extends Animal {
    latir(): void {
        console.log("O cachorro late.");
    }

    farejar(): void {
        console.log("O cachorro fareja algo.");
    }

    brincar(): void {
        console.log("O cachorro brinca com seu dono.");
    }
}

export class Cavalo extends Animal {
    relinchar(): void {
        console.log("O cavalo relincha.");
    }

    galopar(): void {
        console.log("O cavalo galopa no campo.");
    }

    puxarCarruagem(): void {
        console.log("O cavalo puxa uma carruagem.");
    }
}

export class Gato extends Animal {
    miar(): void {
        console.log("O gato mia.");
    }

    caçar(): void {
        console.log("O gato caça um pássaro.");
    }

    dormirMais(): void {
        console.log("O gato dorme em um lugar ensolarado.");
    }
}


//atividade 4
// modelo de classes baseado em uma situação de Locação de Carros

export class Carro {
    modelo: string;
    ano: number;
    disponivel: boolean;

    constructor(modelo: string, ano: number, disponivel: boolean) {
        this.modelo = modelo;
        this.ano = ano;
        this.disponivel = disponivel;
    }
}

export class Cliente {
    nome: string;
    email: string;
    telefone: string;

    constructor(nome: string, email: string, telefone: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

export class Locacao {
    cliente: Cliente;
    carro: Carro;
    dataInicio: Date;
    dataFim: Date;

    constructor(cliente: Cliente, carro: Carro, dataInicio: Date, dataFim: Date) {
        this.cliente = cliente;
        this.carro = carro;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    calcularValorTotal(): number {
        const valorDiaria = 50;
        const diasLocacao = (this.dataFim.getTime() - this.dataInicio.getTime()) / (1000 * 60 * 60 * 24);
        return valorDiaria * diasLocacao;
    }
}

export class Locadora {
    nome: string;
    carros: Carro[] = [];
    locacoes: Locacao[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    adicionarCarro(carro: Carro): void {
        this.carros.push(carro);
    }

    removerCarro(carro: Carro): void {
        const index = this.carros.indexOf(carro);
        if (index !== -1) {
            this.carros.splice(index, 1);
        }
    }

    listarCarrosDisponiveis(): void {
        const carrosDisponiveis = this.carros.filter(carro => carro.disponivel);
        console.log(`Carros disponíveis na ${this.nome}:`);
        for (const carro of carrosDisponiveis) {
            console.log(`Modelo: ${carro.modelo}, Ano: ${carro.ano}`);
        }
    }

    realizarLocacao(cliente: Cliente, carro: Carro, dataInicio: Date, dataFim: Date): void {
        const locacao = new Locacao(cliente, carro, dataInicio, dataFim);
        carro.disponivel = false;
        this.locacoes.push(locacao);
        console.log(`Locação realizada: Cliente: ${cliente.nome}, Carro: ${carro.modelo}, Valor: ${locacao.calcularValorTotal()}`);
    }
}


//atividade 5
console.log("Atvidade 5:");

interface ValorPedido {
    aplicarDescontoEmReais(desconto: number): void;
}

export class PedidoDesejado implements ValorPedido {
    itens: ItemPedido[] = [];
    valorTotal: number = 0;

    add(item: ItemPedido): void {
        this.itens.push(item);
        this.atualizarValorTotal();
    }

    recuperarValorTotal(): number {
        return this.valorTotal;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valorTotal -= desconto;
    }

    removeItem(item: string): void {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
            this.atualizarValorTotal();
        }
    }

    private atualizarValorTotal(): void {
        this.valorTotal = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);
    }
}

export class ItemPedido {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }
}


