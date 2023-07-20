// Trouver la solution au pb //

function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf);

// solution proposé //
function buggyFunction(wtf) {
    console.log(wtf);
};

buggyFunction(9);