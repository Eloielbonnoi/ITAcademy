//Nivell 1.1
//Crea una funció que imprimeixi recursivamente un missatge a la consola amb demores d'un segon.//RESOLT

function compteRegressiu (a) {
        setTimeout(()=>{
        if (a < 0) return
        console.log(a)
        return compteRegressiu(a-1);
        }, 1000)     
    };

    compteRegressiu(10);

//Niell 1.2
//Crea una funció que, en executar-la, escrigui el seu nom en un fitxer. //RESOLT

const fs = require('fs');

fs.writeFile('./texto.txt', 'fs', function(err){  //Crearà l'arxiu texto.txt, amb el contingut 'linea u' i quan acabi executa funct
    if (err){
        console.log(err);
    }
    console.log('Arxiu creat');
});

//Nivell 1.3
//Crea una altra funció que imprimeixi per pantalla el que llegeixi d'un fitxer. //RESOLT

fs.readFile('./texto.txt', function(err, data){ 
    if (err){
    console.log(err)
    } 
    console.log(data.toString()); 
}) 
