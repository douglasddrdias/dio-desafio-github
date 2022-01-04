var currentNumberWrapper = document.getElementById('currentNumber');
var txtNum1 = document.getElementById('txtNum1');
var txtNum2 = document.getElementById('txtNum2');
var btnComparar = document.getElementById('btnComparar');
var lblResultado = document.getElementById('lblResultado');

// Adicionando os eventos ao ser carregada a tela
document.addEventListener("DOMContentLoaded", carregarEventos, false);

// Carregando os botões e seus eventos
function carregarEventos() {
    if (btnComparar != null) {
        btnComparar.addEventListener("click", comparar, false);
    }
}

// Realiza a comparação entre os números informados nos txts
function comparar() {
    let num1 = txtNum1.value != null ? Number(txtNum1.value) : null;
    let num2 = txtNum2.value != null ? Number(txtNum2.value) : null;
    console.log('validação: ', numerosInformadosValidos(num1, num2));
    if (numerosInformadosValidos(num1, num2)) {
        adicionarMensagemAoLabel(compararDoisNumeros(num1, num2));
    }
}

// verifica se os números foram informados corretamente
function numerosInformadosValidos(num1, num2) {
    let mensagemErro = '';
    if (!num1) {
        mensagemErro = 'O número 1 é invalido!';
    }
    if (!num2) {
        mensagemErro = 'O número 2 é invalido!';
    }
    console.log(!mensagemErro);
    if (mensagemErro) {
        adicionarMensagemAoLabel(mensagemErro);
        return false;
    }
    return true;
}

// Adiciona um texto na tela
function adicionarMensagemAoLabel(text) {
    var descricaoMensagem = document.createTextNode(text);
    limparLabel();
    lblResultado.appendChild(descricaoMensagem);
}

// Limpa as mensagem do label
function limparLabel() {
    while (lblResultado.firstChild) {
        lblResultado.removeChild(lblResultado.lastChild);
    }
}

// compara se os dois números e se a soma deles é maior/menor que 10 e maior/menor que 20
function compararDoisNumeros(num1, num2) {
    let numerosIguais = num1 === num2 ? '' : 'não';
    let soma = num1 + num2;
    let maiorQue10 = soma > 10 ? 'maior' : 'menor';
    let maiorQue20 = soma > 20 ? 'maior' : 'menor';
    let retorno = `Os números ${num1} e ${num2} ${numerosIguais} são iguais. Sua soma é ${soma}, que é ${maiorQue10} que 10 e ${maiorQue20} que 20.`;
    console.log(retorno);
    return retorno;
}