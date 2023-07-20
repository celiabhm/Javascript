let mot='Love';
let nombre=20;
let float=1.2;
let array=[1,2,3];
let object1={};
let object2= {};


console.log(mot,nombre,float,array);

// Object 1//
Object.defineProperties(object1, {
    property1: {
        value: 22,
        writable: true
    }
});

console.log(object1.property1);

// Objet 2 //
Object.defineProperties(object2,{
    property1:{
    value :'LOL',
    writable: true
    } 
});

console.log(object2.property1);

// Fonction //
let bonjour=function Bonjour(){
    let bonjour='Hello World';
    console.log(bonjour);
};

console.log(bonjour);
