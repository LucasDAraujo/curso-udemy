function calcularAreaTerreno(largura, comprimento) {
    area = largura * comprimento;
    return area;
}

let largura = prompt("Insira a largura do terreno(em m)");
let comprimento = prompt("Insira o comprimento do terreno(em m)");
document.write(
    "A área do terreno é:" +
        calcularAreaTerreno(largura, comprimento) +
        "m &sup2;"
);
//No jasvascript, a função pode receber nenhum, ou menos, ou mais do que os parâmetros especificados