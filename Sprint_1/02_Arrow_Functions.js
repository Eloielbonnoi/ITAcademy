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
//El N3 segueix sense implementar una classe abstracta! (de fet el abstract aquest no és javascript O.o)

abstract class Animal {       //Classe abstracta
  abstract Soroll(): void;
}

class Gat extends Animal {    //Classes concretes a partir de l'abstracta
  Soroll(){
    console.log('Marrameu');
  }
}

class Gos extends Animal {
  Soroll(){
    console.log('Bub bub');
  }
}


