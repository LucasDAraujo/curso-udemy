function calculadora(tipo, valor) {
    if (tipo === "acao") {
        if (valor === "c") {
            mudarDisplay("limpar")
        } else if (valor === "=") {
            mudarDisplay("calcular")
        } else {
            mudarDisplay("implementar-operador", valor)
        }
    } else {
        mudarDisplay("implementar", valor)
    }
}

function mudarDisplay(comando, valor) {
    //Pega o tamanhho atual da string do input da calculadora
    let tamanhoValue = parseInt(
        document.getElementById("resultado").value.length
    )

    // Pega o último caracter da string do input da calculadora
    let ultimoCaracter = document
        .getElementById("resultado")
        .value.charAt(tamanhoValue - 1)

    switch (comando) {
        //Limpar calculadora
        case "limpar":
            document.getElementById("resultado").value = null
            break

            //implementar valor numérico
        case "implementar":
            document.getElementById("resultado").value += valor
            break

            //implementar operador matemático
        case "implementar-operador":
            //TESTE SE A STRING NÃO É VAZIA OU SE NÃO HÁ SINAIS REPETIDOS
            tamanhoValue > 0 &&
                ultimoCaracter !== "*" &&
                ultimoCaracter !== "+" &&
                ultimoCaracter !== "-" &&
                ultimoCaracter !== "/" &&
                ultimoCaracter !== "." ?
                (document.getElementById("resultado").value += valor) :
                alert("Insira um número primeiro!")

            break

            //implementar calcular resultado caso haja uma operação válida
        case "calcular":
            if (tamanhoValue > 0) {
                //Atribui o cálculo a uma variável
                let calculoCompleto = document.getElementById("resultado").value

                //Realiza o cálculo
                document.getElementById("resultado").value = (eval(calculoCompleto))
            }
            break
    }
}