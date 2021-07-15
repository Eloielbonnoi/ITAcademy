//Nivell 1

let userName;
let pasName = (userName)=> console.log(userName);
pasName('Eloi');

//Nivell 2.1
     
let nom ='Eloi';
let cognom = 'Isern';
console.log( `El teu nom és ${ nom } i el cognom ${cognom}`);

//No acabo d'entendre l'enunciat del Nivell 2.2 Podria ser aquesta la resposta?

let nom ='Eloi';
let cognom = 'Isern';

const printName = (name, prename)=>{ 

  console.log( `El teu nom és ${ name } i el cognom ${prename}`)
  
};

printName('Eloi', 'Isern');

//Nivell 3.1

let counters = [];

function counter() {
  for (var i = 1; i<10; i++){
    console.log(i)
}}

counter();

for (i=1; i <10; i++){
  counters.push(counter());
};

//Nivell 3.2 

let userName;
const pasName = (userName)=> console.log(userName);

pasName('Eloi');
