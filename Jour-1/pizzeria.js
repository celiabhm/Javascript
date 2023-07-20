// Eventuelle commande de pizza //
// Template Strings et concatenation //
const pizzeria = 'La Pizzeria Raffinata';
const pizza='kebab';
const taille=33;
const livraison= 20;
const message= "qu'est-ce que une pizza qui dis a une autre pizza qui lui fais de l'ombre ? 'Suis ta pate et tout ira bien !";


const nomFamille= "brahmi";
const prenom= 'celia';
const tel= '06.34.59.71.49';
const adresse1= 38;
const adresse2='route de verdun,Gagnac';
const cp=31150;


const SumUpOrderPhrase= `Bonjour Madame ${nomFamille}  ${prenom} merci d'avoir passer chez ${pizzeria} votre pizza :${pizza} en taille ${taille} centimetre arrivera dans ${livraison} minutes au ${adresse1} ${adresse2}.`

console.log(SumUpOrderPhrase);
console.log(message);

// Const est défini une fois et ne peut pas etre re définis par la suite comparé a let //