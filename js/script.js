var direccion="/cgi-bin/FruverHouseBack";
/**
 * 
 * @param {string} valor 
 */
function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(valor)) {
      return true;
    } else {
      return false;
    }
} 

function registrarUsuario(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/register.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/FruverHouse/index.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 

}

function loginUsuario(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/login.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            if(response.tipo==="OK"){
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/FruverHouse/main.html')
            }
            else{
                alert("Error: "+response.mensaje)
            }
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    }); 
}

function consultarCategorias(){
    $.ajax({
        method: 'GET',
        url: direccion+'/inicio.py',
        dataType: "json",
        success: function(response) {
            console.log(response)
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    });
}