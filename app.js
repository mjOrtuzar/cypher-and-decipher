$(document).ready(function(){
    M.textareaAutoResize($('#textarea1'));
    //variable que codifica
    var code = $("#code");
    //variable que decodifica
    var decode = $("#decode");
    //cuando se quiera codificar
    code.click(function(){
        var texto = $("#textarea1").val()
        console.log(texto + " esta codificado")
    });
    //cuando se quiera decodificar
    decode.click(function(){
        var texto = $("#textarea1").val()
        console.log(texto + " esta decifrado")
    });
    
});