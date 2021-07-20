//ESTIC FENT-LO, NO HE ACABAT ENCARA

//NIVELL 1.1
//Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
//Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.

function funcioPromise (){
  return new Promise(function(resolve, reject) {
    let x = 0;
      if (x == 0) {
      resolve("Va tot bé");
    } else {
      reject("Hi ha un error");
    }
  });
  
  funcioPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
}
//NIVELL 1.2
//Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un missatge 
//o un altre (que s'imprimirà per consola) en funció del paràmetre.

let arrowFunc = (param, funcio())=>{
  if (param == true){
  console.log('Va tot bé');
  } else {
  console.log('Cagada!');
  }
}('',funcio());

//NIVELL 2.1
//Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//NIVELL 2.2
//Crea una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.
//NIVELL 2.3
//Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.
//NIVELL 3.1
//Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.
