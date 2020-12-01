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
            var obj = {idProducto: productos[j].idProducto,nombre:productos[j].nombre,cantidad:productosEnCarro[productos[j].idProducto],imagen:productos[j].imagen,unidad:productos[j].unidad,precio:productos[j].precio};
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
        txt+='<a class="header">'+totales[i].nombre+'</a> - Precio unitario'+totales[i].precio
        txt+='<div class="description"><p>unidades: '+totales[i].cantidad+' '+totales[i].unidad+'(s)</p></div></div>'
        txt+='<div class="right aligned content"><button class="ui red button">Eliminar</button></div></div>'
        $(".ui.items").append(txt);       
    }
}  



var app = new Vue({
     el: '#app',
     data: {
       productos:totales
     },
     methods: {
        compra: function(){
            var productosACompra=new Array();
            console.log(this.productos)
            for (let i = 0; i < this.productos.length; i++) {
                let productoEnCompra= {idProducto:this.productos[i].idProducto,cantidad:this.productos[i].cantidad};
                productosACompra.push(productoEnCompra);
            }
            axios.post(direccionFlask,productosACompra)
            .then(response => {
                const data = response.data;
                console.log("Compra realizada. Un domiciliario tomará el pedido");
            })
            .catch(error => console.error(error));
        },
     }

})
