// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var word = prompt("Inserisci una parola");
var word_ = prompt("Inserisci una parola");
var wordm = word.length;
var wordf = word_.length;
 
if (wordm > wordf) {
    console.log(word_);
    console.log(word);
} else if (wordm < wordf) {
    console.log(word);
    console.log(word_);
}