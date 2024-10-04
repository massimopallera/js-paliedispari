//verificare se la stringa e` palindroma
// es. Anna e` palindromo

let str = prompt('Inserisci stringa:').toLowerCase()
// console.log(str);

let bool = true

for(let i = 0; i < ((str.length/2)) ; i++){
    if (str.charAt(i) != str.charAt(str.length-i-1)){
        bool = false
        break
    }
}

if (bool){
    document.writeln('Stringa palindroma');
} else {
    document.writeln('Stringa non palindroma');
}