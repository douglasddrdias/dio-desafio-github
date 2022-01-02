var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var botoesAdicionar = document.getElementsByName('adicionar');
var botoesSubtrair = document.getElementsByName('subtrair');
var botaoAdicionar;
var botaoSubtrair;
var divToDo = document.getElementById('div-to-do-list')
const VALOR_MAXIMO = 10;
const VALOR_MINIMO = -10;
const CLASSE_DESABILITADA = 'disabled';
const CLASSE_TEXTO_VERMELHO = 'texto-vermelho';
const CLASSE_TEXTO_RISCADO = 'texto-riscado';

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

function listaPreenchida(lista){
    return lista != null && lista.length > 0;
}