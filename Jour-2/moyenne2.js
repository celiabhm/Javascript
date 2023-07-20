

function monTableau(note1,note2,note3) {
    let moyenne= (note1+note2+note3)/3;
    if (moyenne >= 15) {
        return 'Très bien';
    }
    else if (moyenne >= 10) {
        return 'Assez bien';
    }
    else {
        return 'Refus';
    }
};
console.log(monTableau(4,16,18));

// function msgMentionBacOfficiel(tabNotes) {
//     let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length;
//     console.log('la Moyenne au Bac : ',moyenneCalc);
//     if (moyenneCalc >=16) {
//         return "Tu as Gagné !"
//     } else if (moyenneCalc >=10 && moyenneCalc<16) {
//         return 'Assez Bien'
//     } else {
//         return 'YO T NUL GRO'
//     }
// };
// console.log(msgMentionBacOfficiel([13,6,3]));