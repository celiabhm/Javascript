// On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName //

// PHASE 1 //
let lesTxt= document.body.getElementsByTagName("p");
console.log(lesTxt);
console.log(lesTxt[0]);

// PHASE 2 //
// On va transormer notre htmlCollection en array //

const textesTab= Array.from(lesTxt);
console.log(textesTab);

// On modifie la propriété innerText du 1er paragraphe //
console.log(textesTab[0]);

// PHASE 3 //
// Modifie l'élément spécifié //
textesTab.map(uneCase => uneCase.innerText = "<h1>LOL JE SUIS HACKERMAN</h1>" );



//? bonus syntaxe en ƒ° classic
//! Dans la fonction que l'on passe dans map(), si on met un 2nd param
//! C'est l'index du tableau
textesTab.map(function(x,i){
    x.style.color = "red";
    console.log(i)
});

//? bonus syntaxe en ƒ° fléchée
textesTab.map((x,i) => {
    x.style.color = "red";
    console.log(i)
});

//? Bonus II le retour : utilisation de map pour placer un addEventListener sur chaque <p>
textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK")
}));