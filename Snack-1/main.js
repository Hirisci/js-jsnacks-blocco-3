// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const array=[];
let somma=0;

do{
    let num;
    do{
        num=Number(prompt("Inserisci un numero"));
    }while(isNaN(num))
    somma+=num;
    if(somma<50){
        array.push(num)
    }
}while(somma < 50)

console.log(array);