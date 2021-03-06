var totales=new Array();
var productos;
var productosEnCarro;
var direccion="/cgi-bin/FruverHouseBack";
var direccionFlask='http://18.206.125.25:5000';
/**
 * Función que obtiene el valor de una cookie
 * @param {*} cname 
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
/**
 * Función que establece una cookie
 * @param {*} cname 
 * @param {*} cvalue 
 * @param {*} exdays 
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Función que elimina una cookie por el nombre
 * @param {*} name 
 */
function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
/**
 * Función que elimina todas las cookies 
 */
function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
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
        success: function(rta) {
            response=JSON.parse(rta);
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

/*function registrarAdmin(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/registerthis.Admin.py',
        data: obj,
        dataType: "json",
        success: function(rta) {
            response=JSON.parse(rta);
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

}*/

function registrarDomi(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/registerDomi.py',
        data: obj,
        dataType: "json",
        success: function(rta) {
            response=JSON.parse(rta);
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
        success: function(rta) {
            response=JSON.parse(rta);
            if(response.tipo==="OK"){
                setCookie("usuario",response.usuario.documento,0.3);
                alert("Mensaje: "+response.mensaje)
                $(location).attr('href','/FruverHouse/categoria.html')
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
        url: direccion+'/categoria.py',
        dataType: "json",
        success: function(response) {
            console.log(response);
            pintarCategorias(response);
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    });
}

function crearCategoria(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/categoria.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Categoría creada exitosamente")
            $(location).attr('href','/FruverHouse/categoria.html')
        },
        error: function(response){
            console.log("Error al crear categoría")
            console.log(JSON.stringify(response))
        }
    }); 
}

function actualizarCategoria(obj){
    $.ajax({
        method: 'PUT',
        url: direccion+'/categoria.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Categoría actualizada exitosamente")
            $(location).attr('href','/FruverHouse/categoria.html')
        },
        error: function(response){
            console.log("Error al actualizar categoría ")
            console.log(JSON.stringify(response))
        }
    }); 
}

function eliminarCategoria(obj){
    $.ajax({
        method: 'DELETE',
        url: direccion+'/categoria.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Categoría eliminada exitosamente")
            $(location).attr('href','/FruverHouse/categoria.html')
        },
        error: function(response){
            console.log("Error al eliminar categoría")
            console.log(JSON.stringify(response))
        }
    }); 
}

function crearProtuducto(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Producto creado exitosamente")
            $(location).attr('href','/FruverHouse/producto.html')
        },
        error: function(response){
            console.log("Error al crear producto")
            console.log(JSON.stringify(response))
        }
    }); 
}

function actualizarProducto(obj){
    $.ajax({
        method: 'PUT',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Producto actualizado exitosamente")
            $(location).attr('href','/FruverHouse/producto.html')
        },
        error: function(response){
            console.log("Error al actualizar producto ")
            console.log(JSON.stringify(response))
        }
    }); 
}

function eliminarProducto(obj){
    $.ajax({
        method: 'DELETE',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
            alert("Producto eliminado exitosamente")
            $(location).attr('href','/FruverHouse/producto.html')
        },
        error: function(response){
            console.log("Error al eliminar producto")
            console.log(JSON.stringify(response))
        }
    });    
}
 /**
  * Obtiene una lista de productos de una categoría
  */
function obtenerProducto(){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        dataType: "json",
        success: function(response) {
            pintarProductos(response);
        },
        error: function(response){
            console.log("Error al obtener producto")
            console.log(JSON.stringify(response))
        },
        after: function(e){
            var botones= $(".ui.green.bottom.attached.button")
            for (let i = 0; i < botones.length; i++) {
                botones[i].click(function(){
                    var idProducto = botones[i].prop("id");
                    setCookie(idProducto,getCookie(idProducto)+1,"3");
                    alert("Producto añadido al carrito");
                }) 
            }
        }
    }); 
}

function obtenerIdProducto(obj){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            pintarProductos(response);
        },
        error: function(response){
            console.log("Error al obtener productos")
            console.log(JSON.stringify(response))
        }
    }); 
}

/**
 * Función que pinta productos en tarjetas
 * @param {array} productos 
 */
function pintarProductos(productos){
    var txt="";
    for (var i =0;i < productos.length;i++) {
        txt+='<div class="ui link card">';
        txt+='<div class="image">';
        txt+='<img src="'+productos[i].imagen+'">';
        txt+='</div>';
        txt+='<div class="extra content">';
        txt+='<span class="right floated"> <i class="dollar sign icon"></i>'+productos[i].precio+'</span>';
        txt+='<span class="left floated">';
        txt+=productos[i].nombre+'  '+productos[i].unidad;
        txt+='</span>';
        txt+='</div>';
        txt+='<button id="'+productos[i].idProducto+'" class="ui green bottom attached button">';
        txt+='<i class="shop icon"></i>';
        txt+='Agregar al carrito';
        txt+='</button>';
        txt+='</div>';
        $("#productos").append(txt);
        txt="";
    }
}

function pintarCategorias(categorias){
    var txt="";
    var actcat = "refreshCategoria.html";
    var delecat = "deleteCategoria.html";
    for (var i =0;i < categorias.length;i++) {
        txt+='<div id="'+categorias[i].idCategoria+'" class="ui link card">';
        txt+='<div class="image">';
        txt+='<img src="'+categorias[i].imagen+'">';
        txt+='</div>';
        txt+='<div class="content">';
        txt+='<div class="header">'+categorias[i].nombre+'</div>';
        txt+='</div>';
        txt+='<div class="extra content">';
        txt+='<span class="right floated"> id: '+categorias[i].idCategoria+'</span>';
        txt+='</div>';
        txt+='</div>';
        $("#categorias").append(txt);
        txt="";
    }
}

function cargarSelectCategorias(){
    $.ajax({
        method: 'GET',
        url: direccion+'/categoria.py',
        dataType: "json",
        success: function(response) {
            cargarSelect(response);
        },
        error: function(response){
            console.log("Error al obtener categorias")
            console.log(JSON.stringify(response))
        }
    }); 
}
/**
 * Función que carga un select
 * @param {array} categorias 
 */
function cargarSelect(categorias){
    for (var i=0;i< categorias.length;i++) {
        txt='<option value="'+categorias[i].idCategoria+'">'+categorias[i].nombre+'</option>'
        $("#idCategoria").append(txt);
    }
}

function cargarSelectProductos(){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        dataType: "json",
        success: function(response) {
            cargarSelectProd(response);
        },
        error: function(response){
            console.log("Error al obtener productos")
            console.log(JSON.stringify(response))
        }
    }); 
}

function cargarSelectProd(productos){
    for (var i=0;i< productos.length;i++) {
        txt='<option value="'+productos[i].idProducto+'">'+productos[i].nombre+'</option>'
        $("#idProducto").append(txt);
    }
}
var checkboxes=[];
var direccionDestino="";
var logged=getCookie("usuario")!==null;
var app = new Vue({
    el: '#app',
    data: {
      user:{},
      usuario:{},
      logged:logged,
      productos:totales,
      direccionDestino: direccionDestino,
      admin:{},
      permisos:[]
    },
    methods: {
        registrarAdmin:function(){
            if (validarEmail(this.admin.email)){
                if(this.admin.email!==this.admin.emailc){
                    alert("Los correos no coinciden");
                }
                else {
                    if (this.admin.password!==this.admin.passwordC){
                        alert("Las contraseñas no coinciden");
                    }else{
                        checkboxes = document.getElementsByClassName("el_permiso");
                        var permisosAAsignar=new Array()
                        for (let i = 0; i < checkboxes.length; i++) {
                            if(checkboxes[i].checked){
                                permisosAAsignar.push(checkboxes[i].id);
                            }
                        }
                        var payload ={
                            n1:this.admin.n1,
                            n2:this.admin.n2,
                            a1:this.admin.a1,
                            a2:this.admin.a2,
                            email:this.admin.email,
                            telefono:this.admin.telefono,
                            contra:this.admin.pass,
                            documento:this.admin.cedula,
                            tipoDocumento:this.admin.tipoDocumento,
                            direccion:this.admin.direccion,
                            permisos:permisosAAsignar
                        }
                        axios.post(direccionFlask+"/admin",payload)
                        .then(response => {
                            const data = response.data;
                            alert(data.mensaje);
                            if (data.tipo==="OK"){
                                window.location.assign("index.html")
                            }
            
        })
        .catch(error => console.error(error));
                    }
                } 
            }else{
                alert("Correo en formato incorrecto");
            }
            
        },
       cerrarSesion: function(){
            deleteAllCookies();
            delete_cookie("usuario");
            this.logged=false;
            this.usuario={}
            window.location.assign("index.html")
       },
       carrito:function(){
           window.location.assign("carrito.html")
       },
       compra: function(){
        var productosACompra=new Array();
        console.log(this.productos)
        for (let i = 0; i < this.productos.length; i++) {
            let productoEnCompra= {idProducto:this.productos[i].idProducto,cantidad:this.productos[i].cantidad};
            productosACompra.push(productoEnCompra);
        }
        let user = getCookie("usuario")
        let payload ={"data":productosACompra,"user":user,"direccion":this.direccionDestino};
        axios.post(direccionFlask+"/compra",payload)
        .then(response => {
            const data = response.data;
            alert(data.mensaje);
            if (data.status==="success"){
                for (let i = 0; i < productosACompra.length; i++) {
                    delete_cookie(productosACompra[i].idProducto);
                }
                window.location.assign("index.html")
            }
        })
        .catch(error => console.error(error));
    },
    beforeMount:function(){
        let user = getCookie("usuario")
        if (user===null){
             this.logged=false; 
        }else{
            this.logged=true;
            axios.get(direccionFlask+"/user/"+user)
            .then(response => {
            const data = response.data; 
            this.usuario = data.usuario;
            console.log("Usuario: ",data.usuario);
            })
            .catch(error => console.error(error));
        }
        
        if(document.title==="Registro Administrador- Fruver House"){
            axios.get(direccionFlask+"/permisos")
            .then(response => {
            var obj=response.data;
            this.permisos=obj.permisos;
            console.log(this.permisos);
        })
        }
    },
    }

})
app.beforeMount()