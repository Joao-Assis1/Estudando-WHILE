let contador = 1;

while(contador <= 5){
    let numero = parseInt(prompt("Digite um número:"));
    let multiplicador = 1;
    console.log("número " + numero)
    while (multiplicador <= 5){
        let resultado = numero * (numero + multiplicador);
        console.log(numero + " x " + (numero + multiplicador) + " = " + resultado)
        multiplicador++;
    }
    contador++;
}