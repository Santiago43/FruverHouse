$("#Ingresar").click(function(){
    var email=$("#email").val();
    var pass=$("#pass").val();
    if(validarEmail(email)){
        var obj={
            email:email,
            contra:pass
        };
        loginUsuario(obj)
    }else{
        alert("Formato de correo inválido") 
    }

});