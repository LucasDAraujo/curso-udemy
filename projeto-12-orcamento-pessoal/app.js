/* -------------------------- CRIA AS CLASSES ------------------------- */
class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    //Valida se os atributos estão preenchidos corretamente
    validarDados() {
        for (const i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Bd {
    constructor() {
        //Inicia um valor pro ID se essa dado não existir no local storage
        let id = localStorage.getItem('id')
        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }
    //Incrementa o ID anterior +1
    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    //GRAVA A DESPESA NO LOCAL STORAGE
    //PARA USAR LOCAL STORAGE, VOCÊ PRECISA PASSAR O PARÂMETRO(obj literal) EM NOTAÇÃO JSON
    gravar(despesaNova) {

        let id = this.getProximoId()

        //Converte obj literal passado no parâmetro em JSON
        localStorage.setItem(id, JSON.stringify(despesaNova))

        //Seta o id novo para ser incrementado caso passem um novo registro
        localStorage.setItem('id', id)
    }
}
let bd = new Bd()
/* -------------------------- CRIA A CLASSES ------------------------- */

/* -------------------------- SELECIONA OS VALORES -------------------------- */
function cadastrarDespesa(params) {
    let ano = document.getElementById("ano");
    let mes = document.getElementById("mes");
    let dia = document.getElementById("dia");
    let tipo = document.getElementById("tipo");
    let descricao = document.getElementById("descricao");
    let valor = document.getElementById("valor");

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    );

    if (despesa.validarDados()) {
        //Dialog de sucesso
        //bd.gravar(despesa)
        $('#sucessoGravacao').modal('show')
    } else {
        //Dialog de erro
        $('#erroGravacao').modal('show')
    }
}
/* -------------------------- SELECIONA OS VALORES -------------------------- */