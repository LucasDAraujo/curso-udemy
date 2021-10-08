let arrayNovo = ["Maçã", 100, true, "Uva", null]
document.getElementById("body").innerHTML += ('<h2>' + arrayNovo + '</h2>');
arrayNovo['x'] = 'Jabuticaba'
document.getElementById("body").innerHTML += ('<h2>' + arrayNovo['x'] + '</h2>');
console.log(arrayNovo);