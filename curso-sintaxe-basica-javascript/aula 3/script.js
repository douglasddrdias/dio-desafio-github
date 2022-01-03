// o que são vetores e arrays

// como declarar um array
// let array = ['string', 1, true];
// console.log(array);

// pode guardar vários tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array);
// console.log(array[0]);

// forEach
// array.forEach(function (item, indice) {console.log('Indice ', indice, ' item ', item);});

// push
// array.push('novo item');
//pop
// array.pop();
//shift 
// array.shift();
// unshift
// array.unshift('item');
// indexof
// console.log(array.indexOf(true));
//splice
// array.splice(0, 3);
// let novoArray = array.slice(0,3);
// console.log(array);
// console.log(novoArray);

let object = { string: 'string', number: 1, booleano: true, array: ["array"], objectInterno: {objectInterno: 'objectInterno'}}
// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);
// var array = object.array;
// console.log(array);

var {string, booleano, objectInterno} = object;
console.log(string, booleano, objectInterno);