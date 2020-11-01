var direccion="/cgi-bin/FruverHouseBack";

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

function consultarCategorias(obj){
    $.ajax({
        method: 'GET',
        url: direccion+'/categoria.py',
        dataType: "json",
        success: function(response) {
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
            console.log("Categoría creada exitosamente")
            console.log(response)
        },
        error: function(response){
            console.log("Erro al crear categoría")
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
            console.log("Categoría actualizada exitosamente")
            console.log(response)
        },
        error: function(response){
            console.log("Error al actualizar categoría ")
            console.log(JSON.stringify(response))
        }
    }); 
}

function eliminarCategoria(obj){
    $.ajax({
        method: 'POST',
        url: direccion+'/categoria.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log("Categoría eliminada exitosamente")
            console.log(response)
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
            console.log("Producto creado exitosamente")
            console.log(response)
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
            console.log("Producto actualizado exitosamente")
            console.log(response)
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
            console.log("Producto eliminado exitosamente")
            console.log(response)
        },
        error: function(response){
            console.log("Error al eliminar producto")
            console.log(JSON.stringify(response))
        }
    });    
}

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


function pintarCategorias(categorias){
    var txt="";
    for (var i =0;i < categorias.length;i++) {
        txt='<div id="'+categorias[i].idCategoria+'" class="card">';
        txt+='<div class="image">';
        txt+='<img src="'+categorias[i].imagen+'">';
        txt+='</div>';
        txt+='<div class="content">';
        txt+='<div class="header">'+categorias[i].nombre+'</div>';
        txt+='</div> </div> </div>';
        $("#content").append(txt);
        txt="";
    }
    
}

function pintarProductos(productos){
    var txt="";
    for (var i =0;i < productos.length;i++) {
        txt+='<div id="'+productos[i].idProducto+'" class="card"> <div class="image">';
        txt+='<img src="'+productos[i].imagen+'">';
        txt+='</div>';
        txt+='<div class="content">';
        txt+='<div class="header">'+productos[i].nombre+'</div>';
        txt+='<div class="meta">'
        txt+='<a>'+productos[i].unidad+'</a>';
        txt+='</div> </div>';
        txt+='<div class="extra content">';
        txt+='<span class="right floated"> Precio: '+productos[i].precio+'</span> </div> </div>';
        $("#productos").append(txt);
        txt="";
    }
    
    
}