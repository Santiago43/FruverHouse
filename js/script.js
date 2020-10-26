var direccion="/cgi-bin/FruverHouseBack";

function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(valor)) {
      return true;
    } else {
      return false;
    }
} 
function registrar(obj){
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
$("#btnRegistrar").click(function(e){
    e.preventDefault();
    var primerNombre=$("#n1").val();
    var segundoNombre=$("#n2").val();
    var primerApellido=$("#a1").val();
    var segundoApellido=$("#a2").val();
    var email=$("#email").val();
    var emailc=$("#emailc").val();
    var password=$("#pass").val();
    var passwordC=$("#passc").val();
    var telefono=$("#telefono").val();
    var direccion=$("#direccion").val();
    var check=$("#check1").prop("checked");
    var cedula=$("#cedula").val();
    if (validarEmail(email)){
        if(email!==emailc){
            alert("Los correos no coinciden");
        }
        else {
            if (password!==passwordC){
                alert("Las contraseñas no coinciden");
            }else{
                if (!check){
                    alert("Debe aceptar las políticas de tratamiento de datos");
                }else{
                    var obj={
                        n1: primerNombre,
                        n2: segundoNombre,
                        a1: primerApellido,
                        a2: segundoApellido,
                        email: email,
                        contra: password,
                        telefono: telefono,
                        direccion: direccion,
                        cedula: cedula
                    };
                    registrar(obj);
                }
            }
        } 
    }else{
        alert("Correo en formato incorrecto");
    }
    
});

 