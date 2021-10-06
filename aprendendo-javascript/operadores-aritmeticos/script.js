/*OS OPERADORES SÃO:/*
 * +(adição)
 * -(subtração)
 * *(multiplicação)
 * /(divisão)
 * %(módulo da divisão)
 * ++(pré-incremento/pós-incremento)
 * --(pré-decremento/pós-decremento)
 */
let n1 = parseInt(prompt("Digite o valor de n1"));
let n2 = parseInt(prompt("Digite o valor de n2"));

document.write("A soma de " + n1 + "+" + n2 + " é: " + (n1 + n2) + "<br>");
document.write("A subtração de " + n1 + "-" + n2 + " é: " + (n1 - n2) + "<br>");
document.write(
    "A multiplicação de " + n1 + "*" + n2 + " é: " + n1 * n2 + "<br>"
);
document.write("A divisão de " + n1 + "/" + n2 + " é: " + n1 / n2 + "<br>");
document.write(
    "O resto da divisão de " + n1 + "/" + n2 + " é: " + (n1 % n2) + "<br>"
);
document.write("O incremeto de " + n1 + " é: " + ++n1 + "<br>");
document.write("O incremeto de " + n2 + " é: " + ++n2 + "<br>");
