// you can write js here
console.log('exo-2');

// Déclaration de variables
let runnerAge = prompt("Quel est votre âge ?");
let runnerRegistered = prompt("Etes vous déjà inscrit ? OUI ou NON");
let runnerNumber = Math.floor(Math.random() * 1000);
let message = "";

// Transformation du type de variable en intéger
runnerAge = parseInt(runnerAge);

// Vérification de l'inscription du coureur
if (runnerRegistered === "OUI") {
    runnerRegistered = true;
} else if (runnerRegistered === "NON") {
    runnerRegistered = false;
    runnerNumber = runnerNumber + 1000;
} else {
    console.log("Erreur : la réponse à la deuxième question n'est ni OUI ni NON")
}

// Vériication de l'age du coureur
// création du message
if (runnerAge > 18 && runnerRegistered) {
    message = "you will race at 9:30am."
} else if (runnerAge > 18 || runnerRegistered) {
    message = "you will race at 11:00am."
} else if (runnerAge < 18 || !runnerRegistered) {
    message = "you will race at 12:30am."
} else {
    message = "Go to see the registration desk"
}

// Affichage du message dans la console
console.log(message);