$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
const assistirTrailerYoutube = () => {

}
const paragrafoDescricao = document.getElementById('descricao');
const btnAssistir = document.getElementById('assistir');
const imagens = document.querySelectorAll('img.box-filme');
let arrastouItem = false;

document.addEventListener('mousedown', () => arrastouItem = false);
document.addEventListener('mousemove', () => arrastouItem = true);


// Adiciona um texto na tela
function adicionarMensagemAoLabel(lblResultado, text) {
    var descricaoMensagem = document.createTextNode(text);
    limparLabel(lblResultado);
    lblResultado.appendChild(descricaoMensagem);
}

// Limpa as mensagem do label
function limparLabel(lblResultado) {
    while (lblResultado.firstChild) {
        lblResultado.removeChild(lblResultado.lastChild);
    }
}

function alterarFilmeDestaque(img) {
    if (!arrastouItem) {
        console.log('Imagem ', img);
    }
}

// carrega os eventos da página
function carregarEventos() {
    btnAssistir.addEventListener("click", assistirTrailerYoutube);
    if (imagens != null && imagens.length > 0) {
        for (let img of imagens) {
            img.addEventListener('mouseup', function () {
                alterarFilmeDestaque(img);
            })
        }
    }
}


carregarEventos();