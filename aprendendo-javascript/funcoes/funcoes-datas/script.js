let data = new Date();
//Retorna o dia do mês
console.log(data.getDate());

//Retorna o mês(de 0 a 11)
console.log(data.getMonth() + 1);

//Retorna o ano
console.log(data.getFullYear());

//Data completa
console.log(
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
);

// adicionar / remover dias:
console.log(data.toString());

//Adicionar ou remover um dia na data:
data.setDate(data.getDate() + 1);
console.log(data.toString());

//Adicionar ou remover meses na data:
data.setMonth(data.getMonth() + 1);
console.log(data.toString());

//Adicionar ou remover anos na data:
data.setFullYear(data.getFullYear() + 1);
console.log(data.toString());

/* -------------------------------------------------------------------------- */
//Operações entre duas datas:
document.write("<h1>Operações entre datas:</h1>");

/* -------------------------- Instanciando as datas ------------------------- */

// 15/01/2017
let data1 = new Date(2017, 0, 15);

// 15/02/2017
let data2 = new Date(2017, 1, 23);

/* -------------------------------------------------------------------------- */

/* ------------------ CONVERTENDO PARA UM VALOR CALCULÁVEL ------------------ */
// o getTime pega os milissegundos de 1 de janeiro de 1970 até a data contida na variável
document.write(data1.getTime());
document.write("<hr>");
document.write(data2.getTime());
document.write("<hr><br>");

//Encontrar a qtd de milissegundos entre data1 e data2
document.write("A diferença entre as datas em ms é de:");
document.write(Math.abs(data1.getTime() - data2.getTime()) + "ms");
document.write("<hr>");
/*  1 dia tem 24 horas, cada hora tem 60 minutos, 
    cada minutos tem 60 segundos, 
    cada segundo tem 1000 milissegundos
    então, quantos ms existem em 1 dia?*/
document.write("1 dia possui " + 1 * 24 * 60 * 60 * 1000 + "ms");
document.write("<hr><br>");

// Cálculo final
let diferencaMilissegundos = Math.abs(data1.getTime() - data2.getTime()),
    resultadoDias = diferencaMilissegundos / (1 * 24 * 60 * 60 * 1000);

document.write(
    "Logo, a diferença entre data1 e data2, em dias é de:" + resultadoDias
);

/* -------------------------------------------------------------------------- */
