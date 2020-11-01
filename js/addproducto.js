$(document).ready(function(){
    cargarSelectCategorias();
});

function cargarSelectCategorias(){
    $.ajax({
        method: 'GET',
        url: direccion+'/categorias.py',
        dataType: "json",
        success: function(response) {
            cargarSelect(response);
        },
        error: function(response){
            console.log("Error al obtener productos")
            console.log(JSON.stringify(response))
        }
    }); 
}

function cargarSelect(categorias){
    for (var i=0;i< categorias.length;i++) {
        txt='<option value="'+categorias[i].idCategoria+'">'+categorias[i].nombre+'</option>'
        $("#idCategoria").append(txt);
    }
}