/*
    Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
    Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
    Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
    Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
*/

let idadeinformada = parseInt(prompt("Informe a sua idade"));

if (idadeinformada >= 0 && idadeinformada < 15) {
    document.write("Criança");
} else if (idadeinformada >= 15 && idadeinformada < 30) {
    document.write("Jovem");
} else if (idadeinformada >= 30 && idadeinformada < 60) {
    document.write("Adulto");
} else {
    document.write("Idoso");
}
