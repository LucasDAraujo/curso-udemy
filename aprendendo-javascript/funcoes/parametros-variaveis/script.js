function soma() {
    //console.log(arguments);
    let resultado = 0
    for (const i in arguments) {
        resultado += arguments[i]
    }
    
    return resultado
}

console.log(soma(7, 5, 3.2, 'Texto'));

