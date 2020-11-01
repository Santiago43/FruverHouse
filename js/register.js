/** Botón de registro*/
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
    var tipoDocumento=$("#tipoDocumento").val();
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
                        cedula: cedula,
                        tipoDocumento: tipoDocumento
                    };
                    registrarUsuario(obj);
                }
            }
        } 
    }else{
        alert("Correo en formato incorrecto");
    }
    
});

 