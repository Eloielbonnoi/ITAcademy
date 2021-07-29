//Nivell 1
//Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres. //CORREGIT

const sumaArrow = ((a,b)=> {
return a +b;
})(3,4);
console.log(sumaArrow);
              

//Nivell 2
//Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. //RESOLT

const nauEspacial = (combustible) => {
  return {  
  'Fuel Type': combustible,
  color: 'silver' 
      
};
      };

const enterprise = nauEspacial('Diesel');
console.log(enterprise);

//Nivell 2.2
//Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
//Invocar el mètode decirNombre des de fora de la classe. //RESOLT
    
const Persona = class {
constructor(nom){
this.nom = nom;
}
decirNombre(){
console.log (this.nom);
}
};

const jo = new Persona ('Eloi');
jo.decirNombre();


//Nivell 3
//Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions. //PENDENT CORREGIR

var Animal = function() {
    if (this.constructor === Animal) {
      throw new Error("Can't instantiate abstract class!");
    }
};

Animal.prototype.say = function() {
    throw new Error("Abstract method!");
}

var Gat = function() {
    Animal.apply(this, arguments);
};
Gat.prototype = Object.create(Animal.prototype);
Gat.prototype.constructor = Gat;

Gat.prototype.say = function() {
    console.log('miau');
}

var Gos = function() {
    Animal.apply(this, arguments);
};
Gos.prototype = Object.create(Animal.prototype);
Gos.prototype.constructor = Gos;

Gos.prototype.say = function() {
    console.log('bub');
}

var garfield = new Gat();
var rintintin = new Gos();

garfield.say();
rintintin.say();

