$(document).ready(function(){
    if (getCookie("idCategoria")===""){
        obtenerProducto()
    }
    else{
        var obj={idCategoria:getCookie("idCategoria")};
        obtenerIdProducto(obj);
    }
});

$(document).ready(function(){
    if (document.title==="Actualizar Producto - Fruver House"){
        cargarSelectCategorias();
        cargarSelectProductos();
    }
    else{
        consultarCategorias();
    }
});

$("#btnAgregar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria").val();
    var nombre=$("#nombre").val();
    var unidad=$("#unidad").val();
    var precio=$("#precio").val();
    var imagen=$("#imagen").val();
    var obj={
        idCategoria: idCategoria,
        nombre: nombre,
        unidad: unidad,
        precio: precio,
        imagen: imagen
    }  
    crearProtuducto(obj)
}
);

$("#btnActualizar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria").val();
    var idProducto=$("#idProducto").val();
    var nombre=$("#nombre").val();
    var unidad=$("#unidad").val();
    var precio=$("#precio").val();
    var imagen=$("#imagen").val();
    var obj={
        idCategoria: idCategoria,
        idProducto: idProducto,
        nombre: nombre,
        unidad: unidad,
        precio: precio,
        imagen: imagen
    };
    actualizarProducto(obj)
}
);

$("#btnEliminar").click(function(e){
    e.preventDefault();
    var idProducto=$("#idProducto").val();
    var nombre=$("#nombre").val();
    var imagen=$("#imagen").val();
    var obj={
            idProducto: idProducto
    };
    eliminarProducto(obj)
}
);