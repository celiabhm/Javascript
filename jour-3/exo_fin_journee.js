// Stocker tous les p dans une variable//
let doc= document.getElementsByTagName("p");
console.log(doc);

// Stocker tout les p qui ont une classe "super" dans une variable //
let doc_super= document.getElementsByClassName("super");
console.log(doc_super);

// Stocker LE p qui as un id "special" dans une variable //
let doc_special= document.getElementById("special");
console.log(doc_special);


//? Quand on a une HTMLCollection on peut accèder à un certain élément 
console.log('le 3e <p> dans la HTMLCollection : ',doc[2]);


//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par sa classe
console.log('doc_super querySelector + class',doc_special);

//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes = document.querySelectorAll('p');
console.log('allParagraphes querySelector + balise',allParagraphes);
console.log('allParagraphes mais on prend le 2e',allParagraphes[1]);

//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes_1 = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');
//! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
document.body.insertBefore(allParagraphes_1[9],premierH1);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// laDiv.append(allParagraphes[4]);
// Mais on a aussi la fonction appendChild;
// laDiv.appendChild(allParagraphes[0]);
// //! On peut aussi supprimer un élément du DOM //
document.body.removeChild(allParagraphes[9]);

//!Créer n'importe quel element HTML
const newH1 = document.createElement('h1');//phase 1 creation
newH1.innerText = "AZERTYUIOP";//phase2 remplissage
document.body.append(newH1);//phase 3 on place dans la page //

// Créer un programme qui affiche les données de l'objet dans la page web //

const newTxt= document.createElement('p');
newp.innerText = 'name: John Doe', 'email: john.doe@example.com', 'age:25','dob : 08/02/1989';
document.body.append(newp);


