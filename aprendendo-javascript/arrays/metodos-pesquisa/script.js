let listaFrutas = ['banana', 'maçã', 'uva', 'abacaxi']
console.log(listaFrutas);

//retorna o índice da primeira posição que o valor pesquisado está contido
console.log(listaFrutas.indexOf('abacaxi'));

console.log(listaFrutas);

if (listaFrutas.indexOf('abacaxi') === -1) {
    document.write("<h2>Elemento não encontrado</h2>");
} else {
    document.write("<h2>Índice: " + listaFrutas.indexOf('abacaxi') + "</h2>");

}