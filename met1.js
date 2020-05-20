const alfa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function splitta(){
    var inp = document.form.nocif.value;  //prendo da nocif il valore
    var ch = document.form.ch.value;    //prendo la chiave da ch
    var up = inp.toUpperCase();     //rendo inp maiuscolo e salvo su up
    var lung = inp.length;      //calcolo la lungh della parola
    var spl = up.split("");     //creo una lista con le lettere
    var i = 0;                  //definisco un contatore
    var char;                    //definisco variabile per le singole lettere
    var lettere = new Array();      //creo array con le lettere rispetto ad alfa
    while (i < lung){
        char = alfa.indexOf(spl[i], 0);
        lettere = lettere.concat(char);          //ciclo conta lettere e le salva in lettere
        i++;
    }
    cifra(lettere, ch, lung)         //invio tutto a cifra
}

function cifra(lettere, ch, lung){
    //console.log(lettere);
    //console.log(ch);
    //console.log(lung)
    var letterecifrate = new Array()
    var i = 0;
    while (i < lung) {
        var x = lettere[i];
        //console.log(x);
        if ((parseInt(x)+parseInt(ch)) < 26){
            var x1 = parseInt(x)+parseInt(ch);              // verifica numero min di "z"
        } else {
            var x1 = parseInt(-1)+parseInt(ch)
        }

        letterecifrate = letterecifrate.concat(x1)

        i++;
    }

    console.log(letterecifrate)

    var i2 = 0;
    var cifrato = "";
    var verifica;
    while (i2 < lung){
        var verifica = letterecifrate.shift(i);
        //console.log(verifica);
        cifrato = cifrato + alfabeto.charAt(verifica);
        i2++;
    }
    //console.log(cifrato) //funzionaaaa
    document.form.cif.value = cifrato
}