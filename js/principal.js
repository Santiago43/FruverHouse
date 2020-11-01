$(document).ready(function(){
consultarCategorias();
});

$(".card").click(function(){
    var idCategoria=$(this).prop("id");
    setCookie("idCategoria",idCategoria,2.08e-3);
    $(location).attr('href','/FruverHouse/producto.html')
})