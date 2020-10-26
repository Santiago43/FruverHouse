var direccion="/cgi-bin/FruverHouseBack/";
function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     return true;
    } 
    else{
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
            alert(response);
            console.log(response);
        },
        error: function(response){
            alert(response);
            console.log(response)
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
    var check=$("#check1").val();
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

 