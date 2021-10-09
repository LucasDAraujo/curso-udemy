let listaFuncionarios = ['Damiane', 'João', 'Mateus', 'Gisele', 'Antônia', 'Maria', ]

listaFuncionarios.forEach(function (valor, indice, array) {
    //lógica
    document.write(`
      Índice: ${indice} 
    | Valor: ${valor} 
    | Vetor: ${array} <br />`);
    if (array[indice] === 'João') {
        array[indice] = 'João legal'
    }
})

listaFuncionarios.forEach(nome => {
    lista
});