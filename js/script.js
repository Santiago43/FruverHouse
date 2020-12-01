//import 'client.js'
var direccion="/cgi-bin/FruverHouseBack";
var direccionFlask='http://52.90.193.35:5000';

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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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

$("#carrito").click(function(){
    $(location).attr('href','carrito.html');
    console.log("Hola")
});

var logged=getCookie("usuario")!==null;
var app = new Vue({
    el: '#app',
    data: {
      user:{},
      logged:logged
    },
    methods: {
        mounted(){
           let user = getCookie("usuario")
           let payload ={"user":user}
           if (user===null){
                this.logged=false; 
           }else{
               this.logged=true;
           }
           axios.post(direccionFlask+"/user",payload)
           .then(response => {
               const data = response.data; 
               user = data.usuario;
               console.log("Usuario: ",data.usuario);
           })
           .catch(error => console.error(error));
       },
       cerrarSesion: function(){
            delete_cookie("usuario")
            this.logged=false;
       },
       carrito:function(){
           window.location.assign("carrito.html")
       }
    }

})