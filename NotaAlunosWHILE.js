var nota;
var sexo;
var continuarCadastro = "s";
var somaNotas = 0;
var quantAlunos = 0;
var quantHomens = 0;
var quantMulheresNotaAcima7 = 0;
var maiorNotaHomens = 0;

while(continuarCadastro == "s"){
     nota = prompt('Digite sua nota')
     sexo = prompt('Digite o sexo do aluno: (1-masculino, 2-feminino)');

    somaNotas += nota
    quantAlunos++;

    if (sexo == "1"){
        quantHomens++;

    if(nota > maiorNotaHomens){
        maiorNotaHomens = nota;
    }    
    } else if (sexo == "2" && nota > 7){
        quantMulheresNotaAcima7++;
    }

    continuarCadastro = prompt("Deseja cadastrar outra nota? (s - SIM, n - NÃO");
}

var mediaGeral = somaNotas / quantAlunos;

console.log("Média geral dos alunos:" + mediaGeral);
console.log("Quantidade de homens que enviaram as notas:" + quantHomens);
console.log("Quantidade de mulheres com nota acima de 7:" + quantMulheresNotaAcima7)
console.log("Maior nota entre os homens:" + maiorNotaHomens)