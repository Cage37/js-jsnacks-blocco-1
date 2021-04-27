// // L’utente inserisce due parole in successione, con due prompt.
// // Il software stampa prima la parola più corta, poi la parola più lunga.

// var word_one = prompt("Inserisci una parola");
// var word_two = prompt("Inserisci una parola");
// var wordmax = word.length;
// var wordmin = word_.length;
 
// if (wordmax > wordmin) {
//     console.log(word_one);
//     console.log(word_two);
// } else if (wordmax < wordmin) {
//     console.log(word_two);
//     console.log(word_one);
// }


// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti

// var number1 = Number(prompt("Inserisci un numero"));
// var number2 = Number(prompt("Inserisci un numero"));
// var number3 = Number(prompt("Inserisci un numero"));
// var number4 = Number(prompt("Inserisci un numero"));
// var number5 = Number(prompt("Inserisci un numero"));
// var number6 = Number(prompt("Inserisci un numero"));
// var number7 = Number(prompt("Inserisci un numero"));
// var number8 = Number(prompt("Inserisci un numero"));
// var number9 = Number(prompt("Inserisci un numero"));
// var number10 = Number(prompt("Inserisci un numero"));
// var somma = (number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10);

// console.log(somma);

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// var user = prompt("Come ti chiami?");
// var userList = ["Fabio", "Simone", "Sara", "Beatrice", "Sergio", "Anna", "Giovanni"];
// var ulLen = userList.length
// var access = "Non puoi entrare"

// for (var i = 0; i < ulLen; i++){
//     console.log(userList[i]);
//     if (user == userList[i]){
//         access = "Ottimo, puoi entrare";
//     }
// }

// console.log(access);

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. 

var numberOdd = [];

for (var i = 1; i <= 6; i++) {
    var user = prompt("Inserisci un numero");
    if (user % 2 == 0) {
        console.log(user + " è pari");
    } else {
        numberOdd.push(user);
    }
} 

console.log(numberOdd);

