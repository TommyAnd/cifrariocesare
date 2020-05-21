function encrypt(ch, stringa){
    var split = stringa.split("")
    var lung = stringa.length;
    var output = [];
    for (var i=0; i<lung; i++){
        var char = ascii(split[i]);
        if (char >= 97 && char <= 122){
            if (parseInt(char)+parseInt(ch) > 122){
                char = 96
                output = output.concat(parseInt(char)+parseInt(ch));
            } else{
                output = output.concat(parseInt(char)+parseInt(ch));
            }
        } else if (char >= 65 && char <= 90) {
            if (parseInt(char)+parseInt(ch) > 90){
                char = 64
                output = output.concat(parseInt(char)+parseInt(ch));
            } else{
                output = output.concat(parseInt(char)+parseInt(ch));
            }
            
        } else {output = output.concat(char);}
    }
    var cifred = "";
    for (var i=0; i<lung; i++){
        var char = notascii(output[i])
        cifred = cifred +char
    }
    document.form.area2.value = cifred
}

function vcrypt(){
    var ch = document.form.ch.value;
    var stringa = document.form.area1.value;

    if (ch <= 26 && ch >= 1){
        if (stringa != ""){encrypt(ch, stringa)} 
        else{alert("Inserisci una stringa da cifrare")}
    } else {
        alert("La chiave deve essere minore o uguale a 26 o maggiore o uguale a 1")
    }
}

function decrypt(ch, stringa){
    var split = stringa.split("")   
    var lung = stringa.length;
    var output = [];
    for (var i=0; i<lung; i++){
        var char = ascii(split[i]);
        if (char >= 97 && char <= 122){
            if (parseInt(char)-parseInt(ch) < 97){
                char = 123
                output = output.concat(parseInt(char)-parseInt(ch));
            } else{
                output = output.concat(parseInt(char)-parseInt(ch));
            }
        } else if (char >= 65 && char <= 90) {
            if (parseInt(char)-parseInt(ch) < 65){
                char = 91
                output = output.concat(parseInt(char)-parseInt(ch));
            } else{
                output = output.concat(parseInt(char)-parseInt(ch));
            }
            
        } else {output = output.concat(char);}
    }
    var cifred = "";
    for (var i=0; i<lung; i++){
        var char = notascii(output[i])
        cifred = cifred +char
    }
    document.form.area1.value = cifred
}

function vencrypt(){
    var ch = document.form.ch.value;
    var stringa = document.form.area2.value;

    if (ch <= 26 && ch >= 1){
        if (stringa != ""){decrypt(ch, stringa)} 
        else{alert("Inserisci una stringa da cifrare")}
    } else {
        alert("La chiave deve essere minore o uguale a 26 o maggiore o uguale a 1")
    }
}

function test(x) {console.log(x)}
function ascii (a) {return a.charCodeAt(0);}
function notascii (a) {return String.fromCharCode(a);}
