// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? Boucle for, on définit un index (ici c'est i), 
//? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera éxecuter
//? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numero de la case que l'on console.log)
// for(i=0;i<listeFilm.length;i++){
//     console.log('boucle FOR : ',listeFilm[i]);
// };

// Autre façon de faire //
// FOR EACH //

// let listefilm=['Ultime Décision','Mission Alcatraz','Attack Force'];

// listefilm.forEach(function(listeFilm){
//     console.log(listeFilm);
// });

// Sinon //
// listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

// Encore autre façon de faire //
// FOR OF //
// let listefilm=['Ultime Décision','Mission Alcatraz','Attack Force'];

// for(let unFilm of listefilm){
//     console.log(unFilm);
// }

// Mais aussi de cette façon la //
// FOR IN //
let listefilm=['Ultime Décision','Mission Alcatraz','Attack Force'];


for(let property in listefilm){
    console.log(`${property}: ${listefilm[property]}`);
}