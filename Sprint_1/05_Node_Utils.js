//NIVELL 1
//Nivell 1.1
//Crea una funció que imprimeixi recursivamente un missatge a la consola amb demores d'un segon.//RESOLT
//He creat aquesta funció que té una via d'escapada quan arriba a 0. 

function compteRegressiu (a) {
        setTimeout(()=>{
        if (a < 0) return
        console.log(a)
        return compteRegressiu(a-1); //Si canvio el valor return compteRegressiu(a); passsa a ser un bucle infinit
        }, 1000)     
    };

    compteRegressiu(10);

//Nivell 1.2
//Crea una funció que, en executar-la, escrigui el seu nom en un fitxer. //RESOLT
//Adjunto carpeta amb els moduls i l'arxiu creat. El codi és el d'aquí a sota

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
//Crea una funció que comprimeixi el file del nivell 1 //RESOLT

const compression = require('compression');
const zlib = require('zlib');
const filename = "./texto.txt"
const compress = zlib.createGzip();//Comprimir
const decompress = zlib.createGunzip();//Descomprimir
const readstream = fs.createReadStream(filename)
function compressfile(filename){
    var newfilename = filename+".gz",
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(compress).pipe(writestream);
}
function decompressfile(filename){
    var newfilename = filename.replace(".gz", ""),
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(decompress).pipe(writestream);
}
if(/.gz$/i.test(filename)==true){
    decompressfile(filename)
} else {
    compressfile(filename);
}

//Nivell 2.2
//Crea una funció que llisti per consola el contingut del directori d'usuari. Utilitzi node Child Processes.

//NIVELL 3
//Nivell 3.1
//Creu una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer de l'exercici inicial.

//Nivell 3.2
//Crea una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.

//Nivell 3.3
//Crea una altra funció que desencripti i descodifiqui els fitxers finals tornant a generar els inicials.
