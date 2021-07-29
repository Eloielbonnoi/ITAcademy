//NIVELL 1.1
//Donats els objectes Employees i Salaries, creu una arrow function getEmpleado que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
//Crea una altra arrow function getSalario que rebi com a paràmetre un objecte Employee i retorni el seu salari.

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

const getSalaries =(objEmployee) =>{
  let result = salaries.find(v =>v.id == objEmployee.id)
  return result.salary
};


//NIVELL 1.2
//Crea una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el nom de l'empleat i el seu salari

async 



//NIVELL 2
//Crea una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una demora de 2 segons.
//NIVELL 3
//Capturi tots els errors possibles del Nivell 2.
