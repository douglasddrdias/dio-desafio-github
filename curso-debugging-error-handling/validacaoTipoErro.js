const validarTamanhoArray = (array, tamanho) => {
    if (!array || !tamanho){
        let parametroObrigatorioNaoEnviado = !array && !tamanho ? 'array e tamanho' : !array ? 'array': 'tamanho';
        throw new ReferenceError(`Parâmetro(s) obrigatório(s) não informado(s) ${parametroObrigatorioNaoEnviado}`);
    }
    if (typeof array !== "object"){
        throw new TypeError("Parâmetro array não é do tipo object.");
    }
    if (typeof tamanho !== "number"){
        throw new TypeError("Parâmetro tamanho não é do tipo number.");
    }
    if (array.length !== tamanho){
        throw new RangeError(`Tamanho do array ${array.length} deve ser igual ao tamanho ${tamanho}.`);
    }
    if (array.length === tamanho){
        return array;
    }
}

const chamarValidacao = (array, tamanho) => {
    try {
        console.log(validarTamanhoArray(array, tamanho));
    } catch (e){
        if (e instanceof ReferenceError){
            console.log('Erro do tipo ReferenceError', e);
        } else if (e instanceof TypeError){
            console.log('Erro do tipo TypeError', e);
        } else if (e instanceof RangeError){
            console.log('Erro do tipo RangeError', e);
        } else {
            console.log('Ocorreu um erro inesperado', e);
        }
    }
}

let arraySemErro = [1,5,3,8,7];
let arrayNaoObjeto = 'opa';
// não deve gerar erro
chamarValidacao(arraySemErro, 5);
// parâmetros não informados
chamarValidacao();
// parâmetro array não objeto
chamarValidacao(arrayNaoObjeto, 5);
// parâmetro tamanho não número
chamarValidacao(arraySemErro, '5');
// erro de tamanho diferente
chamarValidacao(arraySemErro, 4);