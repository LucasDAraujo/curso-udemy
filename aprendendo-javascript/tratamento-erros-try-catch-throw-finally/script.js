//netflix
let videos = Array()

videos[1] = Array()
videos[1]['nome'] = 'Fullmetal Alchemist'
videos[1]['categoria'] = 'anime'

function getVideo(video) {

    try { //Bote tudo que pode dar erro aqui dentro
        //lógica
        //http
        console.log(video[0]['nome'])

    } catch (erro) {
        tratarErro(erro)
        console.log("Agora sim podemos tratar esse erro")
        throw new Error("Houve um erro, mas não se preocupe, estamos trabalhando nisso agora!!!")


    } finally {
        console.log('Sempre passa por aqui  try/catch')
    }
    console.log('A aplicação não morreu')
}

function tratarErro(erro) {
    //lógica par a registrar o erro no server
    console.log(`${erro}`)
}
getVideo(videos)