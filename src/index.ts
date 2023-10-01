import { Item, Pedido } from "./classes";
import { FormatoDeElemento, Circulo, Retangulo } from "./classes";
import { Carro, Cliente, Locacao, Locadora } from "./classes";
import { Animal, Cachorro, Cavalo, Gato } from "./classes";
import { PedidoDesejado, ItemPedido, } from "./classes";

//atividade 1
console.log("Atividade 1:");

const item1 = new Item("Item 1", "Descrição do Item 1", 10.0);
const item2 = new Item("Item 2", "Descrição do Item 2", 20.0);

const pedido = new Pedido();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);

pedido.listarItens();
console.log(`Valor Total do Pedido: ${pedido.valorTotal}`);

pedido.removerItem(item1);

pedido.listarItens();
console.log(`Valor Total do Pedido: ${pedido.valorTotal}`);

console.log("--------------------------------------------------");


//atividade 2
console.log("Atividade 2:");

const circulo = new Circulo(5);
const retangulo = new Retangulo(10, 8);

circulo.desenhar();
circulo.redimensionar();

retangulo.desenhar();
retangulo.redimensionar();

console.log("--------------------------------------------------------");


// atividade 3
console.log("Atividade 3:");

const meuCachorro = new Cachorro("Fido", 3);
const meuCavalo = new Cavalo("Relâmpago", 5);
const meuGato = new Gato("Whiskers", 2);

console.log(`Nome do cachorro: ${meuCachorro.getNome()}`);
console.log(`Idade do cavalo: ${meuCavalo.getIdade()}`);

meuCachorro.latir();
meuCachorro.farejar();
meuCachorro.brincar();

meuCavalo.relinchar();
meuCavalo.galopar();
meuCavalo.puxarCarruagem();

meuGato.miar();
meuGato.caçar();
meuGato.dormirMais();

console.log("--------------------------------------------------------");


//atividade 4
console.log("Atividade 4:");

const carro1 = new Carro("Toyota Corolla", 2022, true);
const carro2 = new Carro("Honda Civic", 2022, true);

const cliente1 = new Cliente("Jennifer", "jennie@email.com", "123-456-7890");

const locadora = new Locadora("LocaCar");
locadora.adicionarCarro(carro1);
locadora.adicionarCarro(carro2);

locadora.listarCarrosDisponiveis();

const dataInicio = new Date("2023-10-01");
const dataFim = new Date("2023-10-05");

locadora.realizarLocacao(cliente1, carro1, dataInicio, dataFim);

locadora.listarCarrosDisponiveis();

const locacoes = locadora.locacoes;
console.log("Locações realizadas:");
for (const locacao of locacoes) {
    console.log(`Cliente: ${locacao.cliente.nome}, Carro: ${locacao.carro.modelo}, Valor: ${locacao.calcularValorTotal()}`);
}

console.log("--------------------------------------------------");


//atividade 5
console.log("Atividade 5:");

const itemPedido1 = new ItemPedido(35, "Pizza de Calabresa", 2);
const itemPedido2 = new ItemPedido(22, "Pizza de Chocolate", 4);


const pedidoDesejado = new PedidoDesejado();

pedidoDesejado.add(itemPedido1);
pedidoDesejado.add(itemPedido2);

console.log("Itens no pedido:");
pedidoDesejado.itens.forEach((item) => {
    console.log(`${item.nome} (Quantidade: ${item.quantidade})`);
});

console.log(`Valor total do pedido: R$ ${pedidoDesejado.recuperarValorTotal().toFixed(2)}`);


pedidoDesejado.aplicarDescontoEmReais(5);

console.log(`Valor total com desconto: R$ ${pedidoDesejado.recuperarValorTotal().toFixed(2)}`);


pedidoDesejado.removeItem("Pizza de Calabresa");
console.log("Itens no pedido após remover Pizza de Calabresa:");
pedidoDesejado.itens.forEach((item) => {
    console.log(`${item.nome} (Quantidade: ${item.quantidade})`);
});

console.log(`Valor total do pedido após remover: R$ ${pedidoDesejado.recuperarValorTotal().toFixed(2)}`);