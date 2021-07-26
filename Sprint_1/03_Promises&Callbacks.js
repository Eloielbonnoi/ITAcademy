//ESTIC FENT-LO, NO HE ACABAT ENCARA

//NIVELL 1.1
//Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
//Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas. //RESOLT

function myDisplayer(some) {
  console.log(some);
}
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;  //Per comprovar en cas d'error provar-ho amb x !==0

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
}


//NIVELL 1.2
//Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un missatge 
//o un altre (que s'imprimirà per consola) en funció del paràmetre. //RESOLT

const print = (msg)=>{console.log(msg)}; 

const arrowFunc = (param, print)=>{
  if (param){
  print('Tot va bé');
  } else {
  print('Hi ha un error');
  }
};

arrowFunc('hola', print); //Per testar l'error deixar en blanc el paràmetre param

//NIVELL 2.1
//Donats els objectes employees i salaries, crea una arrow function getEmpleado que retorni una Promise que efectui la cerca en l'objecte pel seu id.

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

const getEmpleado = (filterById)=> {   
    return new Promise((resolve, reject) => { 
      
      //Codi per retornar empleat per la seva id
      
        })
        
            const error = false;
            if(!error){
                resolve();
            } else {
                reject ('Error:Something went wrong'); //Sense un alarm??
            }
    }); 
}

getEmpleado(1)

//NIVELL 2.2
//Crea una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.
//NIVELL 2.3
//Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.
//NIVELL 3.1
//Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.
