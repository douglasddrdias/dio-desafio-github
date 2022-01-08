const maca = {
    value: 2
}
const laranja = {
    value: 3
}

function mapComThis(arr, thisArg){
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg)
}

function mapSemThis(arr){
    return arr.map(function(item) {
        return item * 2;
    })
}

const somentePares = num => num % 2 === 0;

const somaValores = (soma, valor) => soma + valor;

const calcularSaldoCompra = (arr, valorInicial) => {
    return arr.reduce(function (saldo, valor) {
        return saldo - valor;
    }, valorInicial)
}

function multiplicarPorDois(item){
    return item * 2;
}

const nums = [1,2,3,4,5,6,7,8,9,10]
const precos = [5,3,10,36,20];
const nums2 = [2,4,6,8,10];
// console.log('this -> maça', mapComThis(nums, maca));
// console.log('this -> maça', mapComThis(nums, laranja));
// console.log(mapSemThis(nums2));
// console.log(nums.filter(somentePares));
// console.log(nums);
console.log((nums.reduce(somaValores)));
console.log(calcularSaldoCompra(precos, 100));
console.log(nums2.map(multiplicarPorDois));
