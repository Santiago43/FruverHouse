$(document).ready(function(){
    cargarMenuLateralCategorias();
});

function cargarMenuLateralCategorias(){
    $.ajax({
        method: 'GET',
        url: direccion+'/categoria.py',
        dataType: "json",
        success: function(response) {
            console.log(response);
            pintarCategoriasEnMenu(response);
        },
        error: function(response){
            console.log(JSON.stringify(response))
        }
    });
}

function pintarCategoriasEnMenu(categorias){
    for (let i = 0; i < categorias.length; i++) {
        $("#categorias").append(' <a id="'+categorias[i].idCategoria+'"class="item"> '+categorias[i].nombre+' </a>');
    }
}

$("#categorias").on("click", "a", function(){
    var idCategory = $(this).prop("id");
    var obj={idCategoria:idCategory};
    limpiarVentana();
    obtenerIdProducto(obj);
});

function limpiarVentana(){
    $("#productos").empty();
}

$("#productos").on("click", ".ui.green.bottom.attached.button", function(){
    var idProducto = $(this).prop("id");
    var num=parseFloat(getCookie(idProducto))+1;
    var strNum=num.toString()
    setCookie(idProducto,strNum,"3");
    alert("Producto añadido al carrito");
});
