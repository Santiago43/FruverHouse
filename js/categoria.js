$("#btnAgregar").click(function(e){
    e.preventDefault();
    var nombre=$("#nombre").val();
    var imagen=$("#imagen").val();
    if (consultarCategorias(nombre)===None) {
        var obj={
            nombre: nombre,
            imagen: imagen
        }  
        crearCategoria(obj)
    } else {
        alert("Categoría existente")
    }
}
);

$("#btnActualizar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria")
    var nombre=$("#nombre").val();
    var imagen=$("#imagen").val();
    var obj={
        idCategoria: idCategoria,
        nombre: nombre,
        imagen: imagen
    };
    actualizarCategoria(obj)

}
);

$("#btnEliminar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria").val();
    var obj={
        idCategoria: idCategoria,
    };
    eliminarCategoria(obj)
}
);