// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


const container = document.querySelector(".container");
const divRed = document.createElement("div");
divRed.classList.add("box")
divRed.classList.add("box--red")
const divGreen = document.createElement("div");
divGreen.classList.add("box")
divGreen.classList.add("box--green")

const numbers = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numbers.length; i++) {
    const span = document.createElement("span")
    if(numbers[i]%2===0){
        span.innerText = numbers[i]
        divGreen.append(span)
    } else {
        span.innerText = numbers[i]
        divRed.append(span)
    }    
}

container.append(divGreen);
container.append(divRed)