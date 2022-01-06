function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
const pessoa1 = {
    nome: "Douglas",
    idade: 34
}
const pessoa2 ={
    nome: "Aryanne",
    idade: 30
}
const animal = {
    nome: "Sky",
    idade: 1,
    raca: "Vira-lata"
}
console.log(calculaIdade.call(animal, 23));
console.log(calculaIdade.apply(pessoa2, [5]));