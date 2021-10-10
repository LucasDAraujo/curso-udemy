    /* ---------------------------- REDIMENSIONA JOGO --------------------------- */

    //Altura e largura do browser
    let largura = window.innerWidth
    let altura = window.innerHeight

    //Altera altura e largura do browser a cada redimensionamento
    function redimensionaPalcoJogo() {
        largura = window.innerWidth
        altura = window.innerHeight

    }
    /* ---------------------------- REDIMENSIONA JOGO --------------------------- */

    /* ----------------- CRIA POSIÇÕES RANDÔMICAS PROS MOSQUITOS ---------------- */
    function posicionaRandomicamente() {

        //Remover o mosquito anterior, caso exista.
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()
        }


        let posicaoX = Math.floor(Math.random() * window.innerWidth) - 90
        let posicaoY = Math.floor(Math.random() * window.innerHeight) - 90
        posicaoX < 0 ? posicaoX = 20 : posicaoX
        posicaoY < 0 ? posicaoY = 20 : posicaoY

        //Criar o elemento html 
        let imagemMosquito = document.createElement('img')
        imagemMosquito.src = 'images/mosca.png'
        imagemMosquito.id = 'mosquito'

        //Dá uma classe css aleatória baseada no retorno da função(tamanhos e lados)
        imagemMosquito.className = `mosquito-${tamanhoAleatorioMosquitos()}`
        imagemMosquito.className += ` lado-${ladoAleatorio()}`

        //Define a posição do inseto
        imagemMosquito.style.left = `${posicaoX}px`
        imagemMosquito.style.top = `${posicaoY}px`
        document.body.appendChild(imagemMosquito)
    }
    /* ----------------- CRIA POSIÇÕES RANDÔMICAS PROS MOSQUITOS --------------- */


    /* ---------- CRIA TAMANHOS/DIREÇÕES ALEATÓRIOS PRAS IMAGENS DOS MOSQUITOS ---------- */
    function tamanhoAleatorioMosquitos() {
        return Math.ceil(Math.random() * 3)
    }

    function ladoAleatorio() {
        return Math.ceil(Math.random() * 2)

    }
    /* ---------- CRIA TAMANHOS/DIREÇÕES ALEATÓRIOS PRAS IMAGENS DOS MOSQUITOS ---------- */