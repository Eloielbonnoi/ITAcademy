//NIVELL 1.1
//Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
//Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas. //CORREGIT

const hasMeeting = false;
const meeting = new Promise ((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: 'Marketing Meeting',
			location: 'Skype',
			time: '1:00 PM'
		}
		resolve(meetingDetails);
	} else {
		reject(new Error('Meeting already scheduled'))
	}
});

meeting
  .then( res => {
	console.log('Meeting Scheduled');
	console.log(res);
  })
  .catch( err => {
	console.log(err.message);
});

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
//Donats els objectes employees i salaries, crea una arrow function getEmpleado que retorni una Promise que efectui la cerca 
//en l'objecte pel seu id. És a dir, que donada una Id ens retorni tot l'objecte. //RESOLT

const employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

const salaries = [{
    id: 1,
    salary: 4000
    }, {
    id: 2,
    salary: 1000
    }, {
    id: 3,
    salary: 2000
    }];


const getEmpleado = (id)=> {
	return new Promise(function(resolve, reject) {
		const r = employees.find(e => e.id === id);
		
    if (r) {
      console.log('Treballador existent');
			resolve(r);
    	} else {
     	 reject('Treballador desconegut!');
    		}
  	})
	};

getEmpleado(1)               
	.then(r => console.log(r)) 
	.catch(err => console.error(err));



//NIVELL 2.2
//Crea una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.//PER CORREGIR CAL QUE TB RETORNI UNA PROMISE

const getSalaries =(objEmployee) =>{
  let result = salaries.find(v =>v.id == objEmployee.id)
  return result.salary
};

let linux = {
  id: 1,
  name: 'Linux Torvalds'
}  
console.log(getSalaries(linux));


//NIVELL 2.3
//Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises. //PER CORREGIR
//NIVELL 3.1
//Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.
//D'entrada hauria fet
getEmpleado(1)               
	.then(r => {console.log(r); return r}) 
    	.then(r => console.log(getSalaries(r)))
	.catch(err => console.error(err));




