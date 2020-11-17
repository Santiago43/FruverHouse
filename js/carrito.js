var totales=new Array();
var productos;
var productosEnCarro;
$(document).ready(function(){
    cargarProductosEnCompra();
})

function cargarProductosEnCompra(){
    $.ajax({
        method: 'GET',
        url: direccion+'/producto.py',
        dataType: "json",
        success: function(response) {
            productos=response;
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
    productosEnCarro=getCookies();
    for (let j = 0; j < productos.length; j++) {
        if(productosEnCarro.hasOwnProperty(productos[j].idProducto)){
            var obj = {idProducto: productos[j].idProducto,nombre:productos[j].nombre,cantidad:productosEnCarro[productos[j].idProducto],imagen:productos[j].imagen};
            totales.push(obj);
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