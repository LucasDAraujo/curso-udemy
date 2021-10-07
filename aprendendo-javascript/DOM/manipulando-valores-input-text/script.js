function distribuiCaracter() {
    //Selecionar o valor digitado
    let caracter = document.getElementById("entrada").value;

    //Limpar o campo de digitação
    document.getElementById("entrada").value = "";
    //limpar espaços em branco nas extremidades da string
    caracter.trim();
    switch (caracter) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            //adicionar o caracter no campo referente aos números
            document.getElementById("apenas-numeros").value += caracter;
            break;

        default:
            //adicionar o caracter no campo refrente a letras
            document.getElementById("apenas-letras").value += caracter;
            break;
    }
}