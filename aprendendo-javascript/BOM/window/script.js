let janela

function abrirPopUp() {
    //abre janela
    janela = window.open('https://www.duckduckgo.com', 'nova_janela', 'width=200', 'height=300')
}

function fecharPopUp() {
    //fecha janela
    janela.close()
}
