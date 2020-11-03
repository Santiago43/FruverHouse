/** Script de categorías */
$(document).ready(function(){
    if (document.title==="Actualizar Categoría - Fruver House" || document.title==="Eliminar Categoría - Fruver House"){
        cargarSelectCategorias();
    }
    else{
        consultarCategorias();
    }
});

$("#btnAgregar").click(function(e){
    e.preventDefault();
    var nombre=$("#nombre").val();
    var imagen=$("#imagen").val();
    var obj={
        nombre: nombre,
        imagen: imagen
    };  
    crearCategoria(obj);
}
);

$("#btnActualizar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria").val();
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
        idCategoria: idCategoria
    };
    eliminarCategoria(obj)
}
);

$(".ui.cards").on("click", ".link.card", function(){
    var idCategory = $(this).prop("id");
		setCookie("idCategoria", idCategory, 0.0001);
		window.location.assign("producto.html");
});