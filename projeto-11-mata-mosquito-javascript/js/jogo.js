// Vidas do jogador e tempo do game
let vidas = 1
let tempo = 10



/* ----------------------- SETA A DIFICULDADE DO JOGO ----------------------- */
criaMosquitoTempo = 1500

// Extrai o nível de dificuldade escolhido
let dificuldadeEscolhida = window.location.search
dificuldadeEscolhida = dificuldadeEscolhida.replace('?', '')

if (dificuldadeEscolhida === 'normal') {
    criaMosquitoTempo = 1500
} else if (dificuldadeEscolhida === 'dificil') {
    criaMosquitoTempo = 1000
} else if (dificuldadeEscolhida === 'muito-dificil') {
    criaMosquitoTempo = 750
}
/* ----------------------- SETA A DIFICULDADE DO JOGO ----------------------- */


/* ---------------------------- REDIMENSIONA JOGO --------------------------- */

//Altura e largura do browser
let largura = window.innerWidth
let altura = window.innerHeight

//Altera altura e largura do browser a cada redimensionamento
function redimensionaPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

}
// Conta o tempo do game
function cronometroJogo() {
    let cronometro = setInterval(() => {

        tempo--
        if (tempo < 0) {
            clearInterval(cronometroJogo)
            clearInterval(criaMosquito)

            window.location.href = 'vitoria.html'
        } else {
            document.getElementById("cronometro").innerHTML = " " + tempo

        }

    }, 1000);
}
/* ---------------------------- REDIMENSIONA JOGO --------------------------- */

/* ----------------- FUNÇÕES QUE CONTROLAM OS MOSQUITOS E PONTOS DE HP ---------------- */

function posicionaRandomicamente() {

    //Remover o mosquito anterior, caso exista, ou caso o usuário não clique.
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Quando você remove o mosquito automaticamente, subtrai 1 ponto de HP do player
        if (vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById(`vida-${vidas}`).src = 'images/coracao_vazio.png'
            vidas++
        }
    }


    let posicaoX = Math.ceil(Math.random() * window.innerWidth) - 90
    let posicaoY = Math.ceil(Math.random() * window.innerHeight) - 90
    posicaoX < 0 ? posicaoX = 20 : posicaoX
    posicaoY < 0 ? posicaoY = 20 : posicaoY

    //Criar o elemento html 
    let imagemMosquito = document.createElement('img')
    imagemMosquito.src = 'images/mosca.png'
    imagemMosquito.id = 'mosquito'
    imagemMosquito.draggable = false
    imagemMosquito.onclick = function () {
        this.remove()
    }
    mosquito.play()

    imagemMosquito.onmousedown = function () {
        slap.play()
        
    }

    //Dá uma classe css aleatória baseada no retorno da função(tamanhos e lados)
    imagemMosquito.className = `mosquito-${tamanhoAleatorioMosquitos()}`
    imagemMosquito.className += ` lado-${ladoAleatorio()}`
    
    //Define a posição do inseto
    imagemMosquito.style.left = `${posicaoX}px`
    imagemMosquito.style.top = `${posicaoY}px`
   

    // imagemMosquito. = function () {


    // }
    document.body.appendChild(imagemMosquito)
}
/* ----------------- FUNÇÕES QUE CONTROLAM OS MOSQUITOS E PONTOS DE HP --------------- */


/* ---------- CRIA TAMANHOS/DIREÇÕES ALEATÓRIOS PRAS IMAGENS DOS MOSQUITOS ---------- */
function tamanhoAleatorioMosquitos() {
    return Math.ceil(Math.random() * 3)
}

function ladoAleatorio() {
    return Math.ceil(Math.random() * 2)

}
/* ---------- CRIA TAMANHOS/DIREÇÕES ALEATÓRIOS PRAS IMAGENS DOS MOSQUITOS ---------- */