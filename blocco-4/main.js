// Creare un oggetto palla che abbia le seguenti proprietà: nome=palla, peso=10;

var palla = {
    nome: "palla",
    peso: 10
};

console.log(palla);

// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var userPrompt = Number(prompt("Inserisci un nuovo valore del peso"));

palla.peso = userPrompt;