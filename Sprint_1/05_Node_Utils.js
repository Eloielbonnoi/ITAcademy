//NIVELL 1
//Nivell 1.1
//Crea una funció que imprimeixi recursivamente un missatge a la consola amb demores d'un segon.//RESOLT
//He creat aquesta funció que té una via d'escapada quan arriba a 0. 

function compteRegressiu(a) {
    setTimeout(() => {
        if (a < 0) return
        console.log(a)
        return compteRegressiu(a - 1); //Si canvio el valor return compteRegressiu(a); passsa a ser un bucle infinit
    }, 1000)
};

compteRegressiu(10);

//Nivell 1.2
//Crea una funció que, en executar-la, escrigui el seu nom en un fitxer. //RESOLT
//Adjunto carpeta amb els moduls i l'arxiu creat. El codi és el d'aquí a sota

const fs = require('fs');

fs.writeFile('./texto.txt', 'Eloi Isern', function (err) {  
    if (err) {
        console.log(err);
    }
    console.log('Arxiu creat');
});

//Nivell 1.3
//Crea una altra funció que imprimeixi per pantalla el que llegeixi d'un fitxer. //RESOLT

fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
})

//NIVELL 2
//Nivell 2.1
//Crea una funció que comprimeixi el file del nivell 1 //RESOLT

const zlib = require('zlib');
const filename = "./texto.txt"
const compress = zlib.createGzip();//Comprimir
const decompress = zlib.createGunzip();//Descomprimir
const readstream = fs.createReadStream(filename)
function compressfile(filename) {
    var newfilename = filename + ".gz",
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(compress).pipe(writestream);
}
function decompressfile(filename) {
    var newfilename = filename.replace(".gz", ""),
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(decompress).pipe(writestream);
}
if (/.gz$/i.test(filename) == true) {
    decompressfile(filename)
} else {
    compressfile(filename);
}

//Nivell 2.2
//Crea una funció que llisti per consola el contingut del directori d'usuari. Utilitzi node Child Processes. CORREGIT 15-10

const { exec } = require('child_process') 
exec('ls /usr', (error, stdout, stderr) => {  
    if (error) {
        console.log(`error: ${error.message}`); 
        return
    }
    if (stderr) {
        console.log(`stderr: ${stderror}`); 
        return
    }
    console.log(`stdout: ${stdout}`);
});

//NIVELL 3
//Nivell 3.1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer de l'exercici inicial.

const fs = require('fs');
function multiFormatExport(inputPath, outputPath, format) {
  fs.readFile(inputPath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var buf = Buffer.from(data, 'ascii');
    var newData = buf.toString(format);
    fs.writeFile(outputPath, newData, function (err) {
      if (err) {
        console.log(err);
      }
      console.log(`Arxiu creat en format ${format}`);
    });
  })
};

multiFormatExport('./texto.txt', './textohex.txt', 'hex');
multiFormatExport('./texto.txt', './textobase.txt', 'base64');

//Nivell 3.2
//Crea una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.

const fs = require('fs');
const crypto = require('crypto');
let key = '123456781234567812345678';  //Clau o password
let iv = crypto.randomBytes(16);

function encrypterFile(inputPath, outputPath, callback) {
    fs.readFile(inputPath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
        let encrypted = cipher.update(inputPath, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        fs.writeFile(outputPath, encrypted, function (err) {
            if (err) {
                console.log(err);
            }
            console.log(`Arxiu ${outputPath} creat amb èxit`);
            try {
                fs.unlinkSync(inputPath)
                console.log(`Arxiu ${inputPath} esborrat`);
            } catch (err) {
                console.error(err)
            }
        });
    })
};

encrypterFile('./textohex.txt', './hex_encrypted.txt');
encrypterFile('./textobase.txt', './base_encrypted.txt');

//Nivell 3.3
//Crea una altra funció que desencripti i descodifiqui els fitxers finals tornant a generar els inicials.
//COM ÉS QUE NO FUNCIONA?? ON ESTÀ L'ERROR? NO ENTENC QUÈ EM DIU LA CONSOLA

const fs = require('fs')
const crypto = require('crypto');
let key = '123456781234567812345678';  //Clau o password
let iv = crypto.randomBytes(16);

function encrypterFile(inputPath, outputPath, callback) {
    fs.readFile(inputPath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
        let encrypted = cipher.update(inputPath, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        fs.writeFile(outputPath, encrypted, function (err) {
            if (err) {
                console.log(err);
            }
            console.log(`Arxiu ${outputPath} creat amb èxit`);
            try {
                fs.unlinkSync(inputPath)
                console.log(`Arxiu ${inputPath} esborrat`);
            } catch (err) {
                console.error(err)
            }
        });
    })
};

encrypterFile('./textohex.txt', './hex_encrypted.txt');
encrypterFile('./textobase.txt', './base_encrypted.txt');

