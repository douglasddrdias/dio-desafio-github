var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var botoesAdicionar = document.getElementsByName('adicionar');
var botoesSubtrair = document.getElementsByName('subtrair');
var botaoAdicionar;
var botaoSubtrair;
var divToDo = document.getElementById('div-to-do-list')
var botaoNovaTarefa = document.getElementById('novaTarefa');
var txtNovaTarefa = document.getElementById('txtToDo')
const VALOR_MAXIMO = 10;
const VALOR_MINIMO = -10;
const CLASSE_DESABILITADA = 'disabled';
const CLASSE_TEXTO_VERMELHO = 'texto-vermelho';
const CLASSE_TEXTO_RISCADO = 'texto-riscado';
const CLASSE_CHECK_BOX = 'check-box-to-do';

// Adicionando os eventos ao ser carregada a tela
document.addEventListener("DOMContentLoaded", carregarEventos, false);

// Carregando os botões e seus eventos
function carregarEventos() {
    // caso exista algum botão com o nome de adicionar 
    // será associado um evento
    if (listaPreenchida(botoesAdicionar)) {
        botaoAdicionar = botoesAdicionar[0];
        botaoAdicionar.addEventListener("click", increment, false);
    }
    // caso exista algum botão com o nome de subtrair
    // será associado um evento
    if (listaPreenchida(botoesSubtrair)) {
        botaoSubtrair = botoesSubtrair[0];
        botaoSubtrair.addEventListener("click", decrement, false);
    }
    if (botaoNovaTarefa != null){
        botaoNovaTarefa.addEventListener("click", adicionarNovaTarefa, false);
    }
}

// adiciona um ao contador
function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    validarValoresMinMaxAtingidos();
    verificarValorNegativo();
}

// subtrai um ao contador
function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    validarValoresMinMaxAtingidos();
    verificarValorNegativo();
}

// Valida se os valores maximo e minimo  já foram atingidos
// caso tenham sido atingidos os botões são desabilitados
// caso contrário são habilitados
function validarValoresMinMaxAtingidos() {
    // verifica se o valor máximo foi atingido e o botão esta habilitado
    // caso verdadeiro o botão é desabitado 
    if (currentNumber === VALOR_MAXIMO && !botaoAdicionar.disabled) {
        desabilitarBotao(botaoAdicionar);
    } else if(botaoAdicionar.disabled) {
        habilitandoBotao(botaoAdicionar);
    }
    // verifica se o valor máximo foi atingido e o botão esta habilitado
    // caso verdadeiro o botão é desabitado
    if (currentNumber === VALOR_MINIMO && !botaoSubtrair.disabled) {
        desabilitarBotao(botaoSubtrair);
    } else if(botaoSubtrair.disabled){
        habilitandoBotao(botaoSubtrair);
    }
}

// desabilita o botão passado por parâmetro
function desabilitarBotao(botao) {
    botao.disabled = true;
    adicionarClasse(botao, CLASSE_DESABILITADA);
}

// habilita o botão passado por parâmetro
function habilitandoBotao(botao) {
    botao.disabled = false;
    removerClasse(botao, CLASSE_DESABILITADA);
}

// verifica se o contador esta negativo
// caso esteja a cor do texto é alterada para vermelho
function verificarValorNegativo(){
    if (currentNumber < 0){
        adicionarClasse(currentNumberWrapper, CLASSE_TEXTO_VERMELHO);
    } else {
        removerClasse(currentNumberWrapper, CLASSE_TEXTO_VERMELHO);
    }
}

// Adicionar uma classe ao elemento
function adicionarClasse(elemento, classe){
    elemento.classList.add(classe);
}

// removendo uma classo do elemento
function removerClasse(elemento, classe){
    elemento.classList.remove(classe);
}

// verifica se a lista passada por parâmetro foi preenchida
function listaPreenchida(lista){
    return lista != null && lista.length > 0;
}

// adiciona um checkbox ao to-do list
function adicionarNovaTarefa(){
    var divToDo = document.getElementById('div-to-do-list');
    var checkBox = criarCheckBox(txtNovaTarefa.value);
    divToDo.appendChild(checkBox);
    txtNovaTarefa.value = '';
}

// cria um elemento do tipo checkbox
function criarCheckBox(texto){
    var divCheckBox = document.createElement('div');
    var checkBox = document.createElement('input');
    var label = document.createElement('label');
    var descricaoTarefa = document.createTextNode(texto);
    var data = Date.now();
    var id = texto + data;
    label.appendChild(descricaoTarefa);
    label.setAttribute('for', id);
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', id);
    checkBox.setAttribute('name', texto);       
    divCheckBox.appendChild(checkBox);
    divCheckBox.appendChild(label);
    adicionarClasse(divCheckBox, CLASSE_CHECK_BOX);
    checkBox.addEventListener("click", function(){verificarCheckBoxMarcado(checkBox, divCheckBox)}, false);
    return divCheckBox;
}

// verifica se o checkbox foi marcado caso verdadeiro é alterada a classe do checkbox
function verificarCheckBoxMarcado(checkBox, divCheckBox){
    if (checkBox.checked){
        adicionarClasse(divCheckBox, CLASSE_TEXTO_RISCADO);
    } else {
        removerClasse(divCheckBox, CLASSE_TEXTO_RISCADO);
    }
}