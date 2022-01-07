const meuArray = [20,20,250,300,150,20,35,250]

function valoresUnicos(array){
    const set = new Set(array);
    return [...set];
}

console.log(valoresUnicos(meuArray));