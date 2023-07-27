// Créer une class PME et une class EMPLOYE//
// Initialise les données //

class Employee {
    constructor(nom,prenom,age,salaire){
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaire = salaire;
        this._cout = this.calculCout(); 
        // calcul cout annuel de l'employe, attribut outMode //
    };

//  Le calcul // 
    getCout(){
        return this._cout;
    }

// Le calcul cout total d'un employé //
calculCout(){
    const nPme = 12;
    const charges = (0.9);
    // Léger calcul //
    return this._salaire * nPme * (1+charges);
    }
};   


class Pme {
    constructor(nom,equipe,fraisF,fraisA,revenusR){
        this._nom = nom;
        this._equipe = equipe;
        this._fraisF = fraisF;
        this._fraisA = fraisA;
        this._revenusR = revenusR;
        this._Pme = this.calculPme();
        //! attribute en OUT mode (à calculer)
}

bilanCalcul(){
    let bilan=0;
    console.log(`${this._namePme} : Cout Initial : ${this._depensePme}`);
}

// Programme principal //
const pme = new pme (
    "Ma petite Entreprise",
    [new Employee ("Duval","Paul",30,2000),
    new Employee ("Durand","Alain",40,3000),
    new Employee ("Dois","Sylvia",50,4000),],
// Le revenu, frais fixe, frais d'achat //
300000,
20000,
50000);
Pme.bilanCalculed();


