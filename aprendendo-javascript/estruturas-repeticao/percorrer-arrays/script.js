let listaFrutas = ['Banana', 'Maçã', 'Morango', 'Uva', ]

let y = 0
while (y < listaFrutas.length) {
    //Ação
    document.write(listaFrutas[y] + '<br />');
    y++
}
document.write("<hr />");

listaFrutas.forEach(fruta => {
    document.write(fruta + "<br />");
});

