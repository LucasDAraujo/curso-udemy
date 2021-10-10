let musicaJogo = new Audio('/sounds/musica-2.mp3');
musicaJogo.volume -= 0.5

let musicaMenu = new Audio('/sounds/musica.mp3');
musicaMenu.volume -= 0.5

let slap = new Audio('/sounds/slap.mp3');
slap.volume -= 0.9

let mosquito = new Audio('/sounds/mosquito.mp3');
mosquito.volume = 1.0



function mudarCursor() {
    document.getElementById("html").className = 'clicou'

}

function resetarCursor() {
    document.getElementById("html").className = ''
}