let listaFrutas = ['Banana', 'maçã', 'menlancia']

console.log(listaFrutas)

//adiciona um elemento no final do array
listaFrutas.push('uva')
console.log(listaFrutas)

//adiciona um elemento no início do array
listaFrutas.unshift('abacate')
console.log(listaFrutas)

//excluir um elemento no final do array
listaFrutas.pop()
console.log(listaFrutas)

//excluir um elemento no início do array
listaFrutas.shift()
console.log(listaFrutas)

//vetor multidimensional usando as funções
let listaCoisas = []
listaCoisas['frutas'] = listaFrutas

let listaPessoas = ['Daniel', 'Lucas']
listaCoisas['pessoas'] = listaPessoas

listaCoisas['frutas'].push('FRUTA PUSH')
console.log(listaCoisas);
