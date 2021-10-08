let objetos = ["cadeira", "impressora", "garfo"]

function adicionaObjeto() {
    let entradaUsuario = document.getElementById("entrada-dados").value

    // Verificar se o valor está vazio ou preenchido
    if (entradaUsuario.length > 0) {

        //Verificar se o valor informado já existe dentro do Array objetos
        if (objetos.indexOf(entradaUsuario) === -1) {
            objetos.push(entradaUsuario)
            console.log(objetos)
            document.getElementById("entrada-dados").value = ''

        } else {
            alert("O objeto já foi adicionado")
        }
    } else {
        alert("Informe um valor válido ")
    }
}

function ordenaObjetos() {
    objetos = objetos.sort()
    console.log(objetos);
}