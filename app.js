$(document).ready(function(){
    M.textareaAutoResize($('#textarea1'));
    //variable que codifica
    var code = $("#code");
    //variable que decodifica
    var decode = $("#decode");
    //cuando se quiera codificar
    code.click(function(){
        var texto = $("#textarea1").val();
        var arrayCode = [];
        var abcMin = ['a','b','c','d','e','f','g','h','i','j','k','m','n','l','o','p','q','r','s','t','u','v','w','x','y','z'];
        var abcMay = ['A','B','C','D','E','F','G','H','I','J','K','M','N','L','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        //console.log(texto + " esta codificado")
        for (i=0;i<texto.length;i++){
            //se separa cada caracter 
            var char = texto.charAt(i);
            //se "pushea" cada caracter al array vacio.
            arrayCode.push(char);
            // cada caracter en un indice de codigo acsii
            //var convertido= texto.charCodeAt(arrayCode);
            //convierte el indice acsii en un caracter
            //console.log(texto.charAt(char));
            //console.log(convertido);
        }
        var msnCode = new Array();
        for (j=0 ; j<arrayCode.length ; j++){
            
        }
    });
    //cuando se quiera decodificar
    decode.click(function(){
        var texto = $("#textarea1").val()
        console.log(texto + " esta decifrado")
    });
    
});