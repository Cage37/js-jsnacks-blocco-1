// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var word1 = prompt("Inserisci una parola");
var word2 = prompt("Inserisci una parola");
var wordm = word1.length
var wordf = word2.length
 
if (wordm > wordf) {
    console.log("word2 && word1");
} else (wordf > wordm) {
    console.log("word1 && word2");
}