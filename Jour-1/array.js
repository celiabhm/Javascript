// let nom='Celia';
// let age= 21;
// let passions=['Hello World','How are you?'];
// let tabUser=[nom,age,passions];

// console.log(tabUser);
// console.log(tabUser[2]);
// console.log(tabUser[2][1]);

// Autre façon de faire //
// avec un objet //

let objectUser = {
    nom: 'Celia',
    age: 21,
    passions: {
        passion1: 'Hello World',
        passion2: 'How are you?'
    }
};

console.log(objectUser.nom);
console.log(objectUser.age);
console.log(objectUser.passions.passion2);


// BONUS - Modifier la proprieté //

// Object.defineProperties(objectUser,'nom','Celia',{
//     value:'Cece',
//     writable:false
// });

// console.log(objectUser.nom);

// Autre façon de faire //

// let nameUser = 'Dong Rodrigue';
// let ageUser = 65;
// let objetUser = {
//     'nom' : nameUser,
//     'age' : ageUser,
//     'passions': {
//         passion1:'Le Drift',
//         passion2:'Jonquilles'
//     }
// };
// console.log('objet de utilisateur : ',objetUser);
// console.log(objetUser.nom);
// console.log(objetUser['passions']);// c le taleau passions
// console.log(objetUser.passions.passion2);

// objetUser.name = 111;
// objetUser.age = 'DonDiegoDelavega';
// objetUser.passions.passion2 = 'Le Cinéma';