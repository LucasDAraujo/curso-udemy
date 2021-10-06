/*
    a)Se M estiver abaixo de 16 : Baixo peso muito grave 
    b)Se M estiver entre 16 e 16.99:  Baixo peso grave 
    c)Se M estiver entre 17 e 18.49: Baixo peso 
    d)Se M estiver entre 18.50 e 24.99: Peso normal 
    e)Se M estiver entre 25 e 29.99: Sobrepeso 
    f)Se M estiver entre 30 e 34.99: Obesidade grau I 
    g)Se M estiver entre 35 e 39.99: Obesidade grau II 
    h)Se M for maior que 40: Obesidade grau III 
*/

nome = prompt("Insira seu nome");
altura = parseFloat(prompt("Insira sua altura (em cm)")) / 100;
massa = parseFloat(prompt("Insira sua massa(em kg)"));
imc = massa / (altura + altura);
imc = imc.toFixed(2);
let classificacao = "";
if (imc < 16) {
    classificacao = " Baixo peso grave";
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso";
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso grave";
} else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

document.write(
    nome +
        " possui  índice  de  massa  corporal  igual  a " +
        imc +
        ",  sendo  classificado  como: " +
        classificacao
);
