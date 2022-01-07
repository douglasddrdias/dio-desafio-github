const URL_BASE = "https://thatcopy.pw/catapi/rest/";
let wrapperImg = document.getElementById('cat');
let btnTrocaImg = document.getElementById('change-cat');
const OPS = {
    method: 'GET'
}

// Adicionando os eventos ao ser carregada a tela
document.addEventListener("DOMContentLoaded", carregarEventos, false);

// Carregando os botões e seus eventos
function carregarEventos() {
    if (btnTrocaImg != null) {
        btnTrocaImg.addEventListener("click", trocarImagem, false);
    }
    trocarImagem();
}

const trocarImagem = async () => {
    if (!wrapperImg) {
        console.log("Componente de imagem não encontrado!");
    }
    let urlImagem = await recuperarImagem();
    wrapperImg.src = urlImagem;
}

// realiza o acesso ao api e recupera a url da imagem
const recuperarImagem = async () => {
    let resposta = await realizarAcessoApi();
    if (!resposta){
        console.log("Erro ao recuperar os dados da API!");
    }
    if (!resposta.url){
        console.log("A API não retornou nenhuma imgem!");        
    }
    return resposta.webpurl;
}

const realizarAcessoApi = async () => {

    try {
        const resposta = await fetch(URL_BASE);
        const json = await resposta.json();
        return json;
    } catch (e) {
        console.log(e);
    }
    return resposta;
}

