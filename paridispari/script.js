//Gioco Pari Dispari
//L'utente sceglie pari o disapri e inserisce un valore da 1 a 5
//Al computer va assegnato un valore random
//Somma valori
//si dichiara chi ha vinto in base alla somma

function getRandomInt(){
    return Math.floor((Math.random() * 5) + 1)
}

function sum(x,y){
    return Number(x+y)
}

function isEven(n){
    if (n%2 == 0){
        return true
    }

    return false
}

const evenOdd = prompt('Pari o Dispari?')
const player = Number(prompt('Inserisci un numero da 1 a 5:'))
const computer = getRandomInt()

//console.log(computer);


let number = sum(player, computer)

function calcWinner(playerChoice, n){
    let bool = isEven(n)

    if (playerChoice == 'Pari' || playerChoice == 'pari'){
        if (bool){
            return 'Player win';
        }
        else {
            return 'Computer win'; 
        }
    } else if (playerChoice == 'Dispari' || playerChoice == 'dispari'){
        if (bool){
            return 'Computer win';
        }
        else {
            return 'Player win'; 
        }
    }  else {
        return 'Error'
    }
}



document.writeln(calcWinner(evenOdd, number))