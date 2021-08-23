//NIVELL 1
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

//Nivell 1.2
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

//NIVELL 2
//Nivell 2.1
//Crea una funció que comprimeixi el file del nivell 1

//Nivell 2.2
//Crea una funció que llisti per consola el contingut del directori d'usuari. Utilitzi node Child Processes.

//NIVELL 3
//Nivell 3.1
//Creu una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer de l'exercici inicial.

//Nivell 3.2
//Crea una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.

//Nivell 3.3
//Crea una altra funció que desencripti i descodifiqui els fitxers finals tornant a generar els inicials.
