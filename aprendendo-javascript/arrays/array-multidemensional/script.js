let listaDeCoisas = Array()
listaDeCoisas['frutas'] = []
listaDeCoisas['pessoas'] = []

listaDeCoisas['frutas'][0] = 'banana'
listaDeCoisas['frutas'][1] = 'uva'
listaDeCoisas['frutas'][2] = 'melancia'
listaDeCoisas['frutas'][3] = 'mamão'

listaDeCoisas['pessoas'][0] = 'juca'
listaDeCoisas['pessoas'][1] = 'andré'
listaDeCoisas['pessoas'][2] = 'júlia'
listaDeCoisas['pessoas']['x'] = 'JOÃO'
console.log(listaDeCoisas);
document.write(listaDeCoisas['pessoas']['x']);