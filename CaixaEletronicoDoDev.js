let nome = prompt("Digite seu nome");
let CPF = prompt("Digite seu CPF");
let saldoTotal = 0;
let maiorValor = 0;
let somaValores = 0;
let contador = 0;

let continuar = 1;

while(continuar == 1){
    let opcao = parseInt(prompt("Escolha uma opção: \n1 - Saque\n2 - Depósito"));
    let valor = parseFloat(prompt("Digite o valor: "));

    if (opcao == 1){
        if(valor > saldoTotal) {
          console.log("Saldo insuficiente para realizar o saque.");  
        } else if (valor < 0) {
            console.log("Valor inválido");
        } else {
            saldoTotal -= valor;
        }    
    } else if (opcao == 2) {
        if (valor < 0) {
            console.log("Valor inválido.");
        } else {
            saldoTotal += valor;
        }
    } else {
        console.log("Opção inválida.");
    }

    if (valor > maiorValor) {
        maiorValor = valor;
    }

    somaValores += valor;
    contador++;

    continuar = parseInt(prompt("Deseja continuar?\n1 - Sim\n2 - Parar"));
}
  
  console.log("Saldo total: " + saldoTotal);
  console.log("Maior valor inserido:" + maiorValor);
  console.log("Média dos valores inseridos: " + (somaValores / contador));      