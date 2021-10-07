//lógica: recuperar o ID via requiição http(isso é apenas um cenário)

//Preciso passar como uma variável, se eu botar os parênteses, o script vai executar as funções
//exibirArtigo(1, function () {}, function () {});

function exibirArtigo(id, callbackSucesso, callbackErro) {
    if (true) {
        callbackSucesso(
            "<h1>As funções de callback</h1>",
            "<p>As funções de callback são...</p>"
        );
    } else {
        callbackErro("Não foi possível recuperar os dados");
    }
}
let callbackSucesso = function (titulo, descricao) {
    document.write("<h1>" + titulo + "</h1>" + "<p>" + descricao + "</p>");
};
let callbackErro = function (erro) {
    document.write("<bold>Erro:</bold>" + "<p>" + erro + "</p>");
};
exibirArtigo(1, callbackSucesso, callbackErro);
