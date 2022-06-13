// Je modifie légèrment les consignes de l'exercice pour :
// demander des celcius au lieu des kelvin
// transformer le résultat du prompt en integer


// you can write js here
console.log('hello from file');

// Demande à l'utilisateur la température du jour
// et la stock dans la variable celcius (en string)
var celsius = prompt("Quelle est la température en celsius aujourd'hui ?");

// Transformation du type de variable en intéger
celsius = parseInt(celsius);

// déclare variable kelvin
let kelvin = celsius + 273;

// déclare variable fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Transformation en entier
fahrenheit = Math.floor(fahrenheit);

// Affichage dans la console des celcius et fahrenheit
console.log(`La témpérature est de ${celsius} celsius, ${kelvin} kelvin et ${fahrenheit} fahrenheit `)