let num = parseInt(prompt("Digite um número: "));
let i = 0;

while (i <= 3){
    console.log("Tabuada do", num + i);

    let j = 1;
    while (j <= 10){
        console.log((num + i) + " x " + j + " = " + ((num + i) * j));
        j++;
    }
    i++;
}