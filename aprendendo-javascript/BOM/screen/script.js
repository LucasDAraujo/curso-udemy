let altura = window.screen.availHeight
let largura = window.screen.availWidth

document.write(`A largura do navegador é:${largura}<br />`);
document.write(`A altura do navegador é:${altura}<br />`);

if (largura < 500) {
    document.write(`Lógica para impressão do menu versão mobile`);
}