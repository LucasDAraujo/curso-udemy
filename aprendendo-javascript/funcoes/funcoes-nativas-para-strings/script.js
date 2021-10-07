let texto = "TeStE";
console.log("Original:" + texto);

//atributo length(tamanho da string)
console.log(texto.length);
/* -------------------------------------------------------------------------- */

//método charAt(retorna o caracter em um index específico)
console.log(texto.charAt(3));
/* -------------------------------------------------------------------------- */

//método indexOf(retorna a primeira ocorrência de um caractere específico na string, caso ele não acha, retorna -1)
console.log(texto.indexOf("T"));
/* -------------------------------------------------------------------------- */

//método replace(procura um valor na string e substitui, depois retorna a string nova )
console.log(texto.replace("TES", "PES"));
/* -------------------------------------------------------------------------- */

//método substr(recorta a string a partir de um index incial e a qtd de índices que foi dado no segundo parâmetro)
console.log(texto.substr(0, 3));
/* -------------------------------------------------------------------------- */

//método toLowerCase(deixa a string toda minúscula)
//método toUpperCase(deixa a string toda maiúscula)
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());
/* -------------------------------------------------------------------------- */

//método trim(Remove os espaços em branco das extremidades da string)
console.log("-" + " ESPAÇOS_REMOVIDOS ".trim() + "-");
/* -------------------------------------------------------------------------- */
