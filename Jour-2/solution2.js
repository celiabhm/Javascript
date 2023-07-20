// let something = 44;
//     function functionBugParent() {
//         let something = 9;
//         console.log(something);
//         console.log(lesNews);

//         function functionBugEnfant() {
//             let lesNews = `il est 99h67`;
//         }
//     };
//     functionBugParent();
//     console.log(something);

// La variable lesNews n'est pas définis//
// il faut faire deux fonctions séparées //



function functionBugParent(something){
        console.log(something);
};
functionBugParent(9);

lesNews='il est 99h67';
function functionBugEnfant(lesNews){
    console.log(lesNews);
};
functionBugEnfant(lesNews);
