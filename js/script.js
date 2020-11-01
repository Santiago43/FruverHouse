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
            console.log("imprimo aquí")
            console.log(response)
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

function obtenerProtuducto(obj){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log("Producto obtenido exitosamente")
            console.log(response)
        },
        error: function(response){
            console.log("Error al obtener producto")
            console.log(JSON.stringify(response))
        }
    }); 
}

function obtenerIdProtuducto(obj){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log("Productos obtenidos exitosamente")
            console.log(response)
        },
        error: function(response){
            console.log("Error al obtener productos")
            console.log(JSON.stringify(response))
        }
    }); 
}