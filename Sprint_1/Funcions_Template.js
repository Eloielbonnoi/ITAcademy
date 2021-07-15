//Nivell 1 Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i passant el nom com a paràmetre.

let userName;
const pasName = (userName)=> console.log(userName);
pasName('Eloi');

//Nivell 2.1
//Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, creant les variables i referenciant en la impressió de l'missatge
     
let nom ='Eloi';
let cognom = 'Isern';
console.log( `El teu nom és ${ nom } i el cognom ${cognom}`);

//Nivell 2.2 Invocar la funció mitjançant template literals. FALTA ACABAR!!!!!!

let userName;
const pasName = (userName)=> console.log(userName);

console.log(`This is ${test1('hi there')} and ${test2('hi again')}`); //PER AIXÒ 

//Nivell 3.1 Crea una matriu de deu funcions i empleni-la mitjançant un bucle. Cada funció comptarà del 0-9 imprimint-ho per pantalla. 
//Invoqui cada funció de l'array iterativament. Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades

let counters = [];

function counter() {
  for (var i = 1; i<10; i++){
    console.log(i)
}}

counter();

for (i=1; i <10; i++){
  counters.push(counter());
};

//Nivell 3.2 Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi per pantalla el nom d'usuari rebut com a paràmetre

let userName;
const pasName = (userName)=> console.log(userName);

pasName('Eloi');
