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
