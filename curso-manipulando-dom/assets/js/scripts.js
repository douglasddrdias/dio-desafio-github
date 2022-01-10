const btnAlterar = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body');
const footer = document.getElementsByTagName('footer');
const h1 = document.getElementById('page-title');
btnAlterar.addEventListener('click', alterarModo);



function alterarModo () {    
    alterarClasse(btnAlterar);
    for (b of body){
        alterarClasse(b);
    }
    for (f of footer){
        alterarClasse(f);
    }
    alterarTexto();
}

function alterarTexto() {
    if (btnAlterar.innerText.includes('Dark Mode')) {
        btnAlterar.innerText = 'Light Mode';
        h1.innerText = 'Dark Mode ON';
    } else {
        btnAlterar.innerText = 'Dark Mode';
        h1.innerText = 'Light Mode ON';
    }
}

const alterarClasse = (elemento) => {
    elemento.classList.toggle('dark-mode');
}