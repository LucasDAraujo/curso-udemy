let valor1 = parseInt(prompt("Digite um valor"));
simbolo = prompt("Digite um símbolo: + para soma ou - para subtração");
let valor2 = parseInt(prompt("Digite um outro valor"));

document.write("O resultado é:" + somar(valor1, valor2, simbolo));

function somar(valor1, valor2) {
    switch (simbolo) {
        case "+":
            result = valor1 + valor2;
            break;
        case "-":
            result = valor1 - valor2;
            break;
        default:
            result = "Operação inválida";
            break;
    }
    return result;
}
