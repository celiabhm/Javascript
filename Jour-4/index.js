const leTitre = document.querySelector("h1");
const lesLiens = document.querySelectorAll("a");
// écoute le clic et éxécute la fonction //
lesLiens[0].addEventListener("click", function () {
    leTitre.classList.add("laClasse");
    document.body.classList.add("bodyBg");
});
// On supprime la classe maCouleur (css) sur titre //
lesLiens[1].addEventListener("click", function () {
    leTitre.classList.remove("laClasse");
});
// Supprime un jeton de la liste //
lesLiens[2].addEventListener("click", function () {
    leTitre.classList.toggle("laClasse");
});

// Exercice 24.5 //
// document.addEventListener('click', function(eventClick){
//     console.log(eventClick);
//     console.log('Les coord : ',eventClick.x, eventClick.y);
//     // On Créer une image
//     const monImg = document.createElement('img');
//     const tailleImg = 150;
//     // On rajoute une src à l'image
//     monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
//     // On modifie le type de position de l'image
//     monImg.style.position = 'absolute';
//     // On modifie la position top de l'image
//     monImg.style.top = eventClick.y - tailleImg /2 +'px';
//     // On modifie la position left de l'image
//     monImg.style.left = eventClick.x -tailleImg /2 +'px';
//     //On place l'image fraichement créee dans le body de la page
//     document.body.append(monImg);
// });

// let img= document.querySelector("img");
// const tabImg=Array.from(img);

// Exercice Load //
// let lesImages = document.querySelectorAll(`img`);
// console.log(lesImages);
// let tabImg = Array.from(lesImages);
// console.log(tabImg);
// tabImg.map(function (uneImage, index) {
//   uneImage.addEventListener("load", function () {
//     console.log(`Image numéro : ${index} – vient de finir de charger.`);
//   });
// });

// Exercice 24.2 //
const h3Title = document.querySelector('#mouseOut');
const mainContainer = document.querySelector('#mainContainer');
let lesImagesFirst = document.querySelectorAll(`img`)[0];

console.log(h3Title);
document.addEventListener('mouseleave', () => {
    //? Comme vu pour les objets on peux accèder aux propriétés dans l'objet style de l'element 
    h3Title.style.display = 'block';
    h3Title.style.color = 'red';
    h3Title.style.backgroundColor = 'chartreuse';
    h3Title.innerText = 'SOLDES';
});

// Exo Focus - Blur //

let lelnput = document.querySelector('input');

lelnput.addEventListener('focus', function () {
    lelnput.style.backgroundColor = 'blue';
    lelnput.style.color = 'white';
});



// Exo scroll //
document.addEventListener('scroll', function (scrollEvent) {
    console.log(scrollEvent);
    let laBar = document.querySelector('.bar');
    let scrollMax = document.body.scrollHeight - innerHeight;
    let onEstOu = (scrollMax * 100) / scrollY;

    console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY}
    pourcentage de scroll :${onEstOu} %`);
    laBar.style.width = onEstOu + '%';
});

// Exo 24.4//
let txt = document.querySelector("textarea");
let btn = document.querySelector("button");

txt.addEventListener('keyup', function (event) {
    if (txt.value.length > 5) {
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
    }
});

// Exo prevent //
let monForm = document.querySelector("form");
monForm.addEventListener('submit', function (Event) {
    Event.preventDefault();
    console.log('ok formulaire envoyé');
    console.log(Event);
    monForm.reset();
});

// Exo settimeout //
let monTitre = document.querySelector('h2');
setTimeout(function () {
    innerText.monTitre("Hi girls !");
    monTitre.style.color = "white";
    monTitre.style.textAlign = 'center';
    monTitre.style.opacity = 1;
    // Partie corrigée //
    document.style.backgroundColor = "#4158D0"
    document.body.style.backgroundImage = " linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
}, 2000);
// 2000 = timer (compteur avant de réaliser l'action) //

// Exo setinterval //
let monTitle = document.querySelector('h3');
let timer = 3;

monTitle.addEventListener('click', function () {
    const countDown = setInterval(function () {
        if (timer > 0) {
            monTitle.textContent = timer;
        }
        else {
            monTitle.textContent = 'GO,GO,GO';
            clearInterval(countDown)
        }
        console.log(timer);
        timer--;
        // pour ne pas gaspiller des performances pour rien //
    }, 1000);
});

// Exo editeur de texte //
let monTxt = document.querySelector("textarea");
let maDiv = document.getElementById("#formrender");

monTxt.addEventListener('keypress', function () {
    maDiv.innerHTML = marked(monTxt.value);
});


// Rajouter ici le site js //

// Exo local storage //
monTxt.value = localStorage;
localStorage.getItem("monSuperTexte");
if()
