//Nivell 1
//mprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.

const sumaArrow = (a,b) => a + b;

console.log(sumaArrow(3, 4));


//Nivell 2
    //Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const arrowFunc = (param) => {
  let spaceship = {  
    
  'Fuel Type': param ,
  color: 'silver' 
};
  console.log(spaceship);
      };

arrowFunc('Diesel');


    //Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
    //Invocar el mètode decirNombre des de fora de la classe.
    
const Persona = class {
constructor(nom){
this.nom = nom;
}
decirNombre(){
return this.nom;
}
};
console.log(new Persona('Eloi').decirNombre());


//Nivell 3
//Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions.

var creaObjectes = class Objecte {     
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

 const novaPersona1 = new Objecte ('Eloi','25');
 const novaPersona2 = new Objecte ('Aina','33');

