function alterarParesPorZero(array){
    if (!array || !array.length){
        return -1;
    }
    let num = 0;
    for (let i = 0; i < array.length; i++){
        num = Number(array[i]);
        
        if (!num){
            console.log(`Valor '${array[i]}' não numerico!!`);
        } else if (num === 0){
            console.log("Voce já é zero!!");
        } else if (num % 2 ===0){
            console.log(`Substitindo ${num} por 0....`);
            array[i] = 0;
        }
    }
    return array;
}

function teste (){

}
let array = [1,3,4,6,80,33,23,90, 'teste', 'eita', false, true, []];
// let array = [];
console.log(alterarParesPorZero(array));