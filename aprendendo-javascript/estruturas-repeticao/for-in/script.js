let listaConvidados = []
listaConvidados['a'] = 'Jorge'
listaConvidados[10] = 'Jamilton'
listaConvidados[-1] = 'José'
listaConvidados['d'] = 'Ana'
listaConvidados[true] = 'Maria'

console.log(listaConvidados)

//
for (x in listaConvidados) {
    document.write(`Índice: ${x} / Valor: ${listaConvidados[x]}<br />`)
}