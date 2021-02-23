import {client} from "./Client.js"
import {contacorrente} from "./ContaCorrente.js"

const cliente1 = new client();
cliente1.cpf = "3499823945029";
cliente1.nome = "Gabriel";

const cliente2 = new client();
cliente2.cpf = "234524352346";
cliente2.nome = "Millena";

//const contaMillena = new contacorrente();
//contaMillena.agencia = "52340";
//contaMillena.saldo = "50";

const contaMillena = new contacorrente();
contaMillena.client = new client();
contaMillena.client.nome = "Millena";

let valor = 200
const contaGabriel = new contacorrente();
contaGabriel.agencia = "12321";
contaGabriel.client = cliente1;
contaGabriel.depositar(500);
contaGabriel.transferir(valor, contaMillena);
const valorSacado = contaGabriel.sacar(10);

console.log(valorSacado);
console.log(contaMillena);
console.log(contaGabriel);