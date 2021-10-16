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

    recuperarTodosOsRegistros() {
        let listaDespesas = []

        let id = localStorage.getItem('id')

        //Recuperar todas as despesas cadastradas em local storage
        for (let i = 1; i <= id; i++) {
            //Recuperar a despesa
            const despesa = JSON.parse(localStorage.getItem(i))

            //Se existem índices que foram removidos, então, pule os índices

            if (despesa === null) {
                continue
            }
            listaDespesas.push(despesa)

        }

        return listaDespesas
    }

    pesquisar(despesaPesquisada) {
        let despesasFiltradas = []

        despesasFiltradas = this.recuperarTodosOsRegistros()

        //Filtro de ano
        if (despesaPesquisada.ano != '') {
            despesasFiltradas = despesasFiltradas.filter(valorIndice => valorIndice.ano == despesaPesquisada.ano)
        }

        //filtro de mês
        if (despesaPesquisada.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(valorIndice => valorIndice.mes == despesaPesquisada.mes)
        }

        //Filtro de dia
        if (despesaPesquisada.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(valorIndice => valorIndice.dia == despesaPesquisada.dia)
        }

        //Filtro de tipo
        if (despesaPesquisada.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(valorIndice => valorIndice.tipo == despesaPesquisada.tipo)
        }

        //Filtro de descrição
        if (despesaPesquisada.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(valorIndice => valorIndice.descricao.toLowerCase() == despesaPesquisada.descricao.toLowerCase())
        }

        //Filtro de valor
        if (despesaPesquisada.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(valorIndice => valorIndice.valor == despesaPesquisada.valor)
        }
        limpaCampos()
        return despesasFiltradas
    }

}
let bd = new Bd()
/* -------------------------- CRIA A CLASSES ------------------------- */

/* -------------------------- REALIZA O CADASTRO DE ELEMENTOS E VERIFICA OS CAMPOS -------------------------- */
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
    //Se os dados forem válidos, gravar despesa e eexibir mensagem, senão, não gravar e exibir msg de erro
    if (despesa.validarDados()) {
        //Dialog de sucesso
        bd.gravar(despesa)
        document.getElementById('modal-header').classList.remove('text-danger')
        document.getElementById('modal-header').classList.add('text-success')

        document.getElementById('modal-title').innerHTML = 'Registro inserido com sucesso!'

        document.getElementById('modal-body').innerHTML = 'Sua nova despesa foi computada corretamente!'

        document.getElementById('btn-Modal').classList.remove('btn-danger')
        document.getElementById('btn-Modal').classList.add('btn-success')

        limpaCampos()

        $('#registraDespesa').modal('show')
    } else {
        //Dialog de erro
        document.getElementById('modal-header').classList.remove('text-success')
        document.getElementById('modal-header').classList.add('text-danger')

        document.getElementById('modal-title').innerHTML = 'Registro inválido!'

        document.getElementById('modal-body').innerHTML = 'Existem campos não preenchidos no formulário!'

        document.getElementById('btn-Modal').classList.remove('btn-success')
        document.getElementById('btn-Modal').classList.add('btn-danger')

        $('#registraDespesa').modal('show')
    }
}

function limpaCampos() {
    //Limpa os campos após tudo ser gravado
    ano.value = ''
    mes.value = ''
    dia.value = ''
    tipo.value = ''
    descricao.value = ''
    valor.value = ''
}
/* -------------------------- REALIZA O CADASTRO DE ELEMENTOS E VERIFICA OS CAMPOS -------------------------- */


/* ---------------------- CARREGAR A LISTA DE DESPESAS ---------------------- */
function carregaListaDespesas(despesasParametro = Array(), filtro = false) {

    if (despesasParametro.length == 0 || filtro == false) {
        despesasParametro = bd.recuperarTodosOsRegistros()

    }

    let tableBody = document.getElementById("listaDespesas")
    tableBody.innerHTML = ''

    ///percorrer o array despesas listando cada despesa de forma dinâmica
    despesasParametro.forEach(despesa => {

        //criando a linha da tabela(tr)
        let linhaTabela = tableBody.insertRow()

        // Criar  as colunas(td)
        linhaTabela.insertCell(0).innerHTML = `${despesa.dia}/${despesa.mes}/${despesa.ano}`

        //Ajustar o tipo
        switch (despesa.tipo) {
            case '1':
                despesa.tipo = 'Alimentação'
                break
            case "2":
                despesa.tipo = "Educação"
                break
            case "3":
                despesa.tipo = 'Lazer'
                break
            case "4":
                despesa.tipo = "Saúde"
                break
            case "5":
                despesa.tipo = "Transporte"
                break

        }

        linhaTabela.insertCell(1).innerHTML = despesa.tipo

        linhaTabela.insertCell(2).innerHTML = despesa.descricao

        linhaTabela.insertCell(3).innerHTML = `R$${despesa.valor}`
    });
}

/* ---------------------- CARREGAR A LISTA DE DESPESAS ---------------------- */


/* --------------------------- PESQUISAR DESPESAS --------------------------- */
function pesquisarDespesa() {
    let ano = document.getElementById("ano").value,
        mes = document.getElementById("mes").value,
        dia = document.getElementById("dia").value,
        tipo = document.getElementById("tipo").value,
        descricao = document.getElementById("descricao").value,
        valor = document.getElementById("valor").value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesaFiltrada = bd.pesquisar(despesa)

    let tableBody = document.getElementById("listaDespesas")

    tableBody.innerHTML = ''

    ///percorrer o array despesas listando cada despesa de forma dinâmica
    carregaListaDespesas(despesaFiltrada, true)

}
/*  --------------------------- PESQUISAR DESPESAS --------------------------- */