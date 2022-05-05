const array=[];
let somma=0;

do{
    let num;
    do{
        num=Number(prompt("Inserisci un numero"));
    }while(isNaN(num))
    array.push(num)
    somma+=num;
}while(somma < 50)

console.log(array);