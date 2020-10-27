$("#Ingresar").click(function(e){
    e.preventDefault();
    var email=$("#email").val();
    var pass=$("#pass").val();
    if(validarEmail(email)){
        var obj={
            email: email,
            contra: pass
        };
        loginUsuario(obj)
    }else{
        alert("Formato de correo inválido") 
    }

});