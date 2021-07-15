//NIVELL 1
//Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
//Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.

function funcioPromise () {
    return new Promise((resolve(), reject()) => {
            const error = false;
            if(!error){
                resolve();
            } else {
                reject ('Error:Something went wrong'); //Sense un alarm??
            }
    }); 
}
