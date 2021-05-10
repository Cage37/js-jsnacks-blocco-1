// // Creare un oggetto palla che abbia le seguenti proprietà: nome=palla, peso=10;

// var palla = {
//     nome: "palla",
//     peso: 10
// };

// // Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

// var nuovoPeso = Number(prompt("Inserisci un nuovo valore del peso"));

// palla.peso = nuovoPeso;

// console.log(palla);


// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var triangolo = {
    base: 30,
    altezza: 40
}

var ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
console.log(ipotenusa);

var perimetro = ipotenusa + (triangolo.base * 2);
console.log(perimetro);

var area = (ipotenusa * triangolo.altezza) / 2;
console.log(area);