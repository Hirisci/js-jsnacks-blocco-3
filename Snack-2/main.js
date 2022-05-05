// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

let num;
do{
    num = Number(prompt("inserisci un numero di array da generare"))
}while(isNaN(num))

do{   
    const array = []
    for(let i = 0 ; i<10; i++){
        array.push(Math.floor(Math.random()*100 +1))
    }
    console.log(array)
    num--;
}while(num>0)

