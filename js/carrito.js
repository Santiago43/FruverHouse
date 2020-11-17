var totales=new Array();
$(document).ready(function(){
    cargarProductosEnCompra();
})

function cargarProductosEnCompra(){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        dataType: "json",
        success: function(response) {
            organizarCarro(response);
        },
        error: function(response){
            console.log("Error al obtener producto")
            console.log(JSON.stringify(response))
        },
        after: function(e){
        }
    }); 
}

function organizarCarro(productos){
    var productosEnCarro=getCookies();
    for (let i = 0; i < productosEnCarro.length; i++) {
        for (let j = 0; j < productos.length; j++) {
            if(productosEnCarro[i].hasOwnProperty(productos[i].idProducto)){
                var obj = {idProducto: productos[j].idProducto,nombre:productos[j].nombre,cantidad:productosEnCarro[i]};
                totales.push(obj)
                continue;
            }    
        }
    }
    pintarProductosAComprar(totales)
}


function getCookies(){
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i=0; i<pairs.length; i++){
      var pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}

function pintarProductosAComprar(totales){
    var txt="";
    for (let i = 0; i < totales.length; i++) {
        txt='<div class="item">'
        txt+='<div class="ui tiny image">'
        txt+='<img src="'+totales[i].imagen+'"></div>'
        txt+='<div class="middle aligned content">'
        txt+='<a class="header">'+totales[i].nombre+'</a></div></div>'
        $(".ui.items").append(txt);       
    }
}  