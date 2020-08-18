var config = {
    apiKey: "AIzaSyDmSgbd1fC4137aOFsl_onDafluxmZB6y4",
    authDomain: "prueba2-a725c.firebaseapp.com",
    databaseURL: "https://prueba2-a725c.firebaseio.com",
    projectId: "prueba2-a725c",
    storageBucket: "prueba2-a725c.appspot.com",
    messagingSenderId: "422920973317",
    appId: "1:422920973317:web:0738836eb10d1e40de806c"

};

existe = new Boolean(false)
firebase.initializeApp(config);

var database = firebase.database();
var referencia = database.ref("productos");
var productos = {};

$(document).ready(function () {
    // Inicializar la base de datos
  
    // Fijarse que la ruta de partida ahora es la colección productos:
  
   
    /*
    Evento: value

    The value event is used to read a static snapshot of the contents at a given database path,
    as they existed at the time of the read event. It is triggered once with the initial data and again every time the data changes.
    The event callback is passed a snapshot containing all data at that location, including child data. In our code example above,
    value returned all of the blog posts in our app. Everytime a new blog post is added, the callback function will return all of the posts.
    */
   var select = document.getElementById("Medica");
    referencia.on('value', function (datos) {
        productos = datos.val();

        $.each(productos, function (indice, valor) {
            var nuevo = document.createElement("option");
            nuevo.value = valor.articulo;
            nuevo.innerHTML = valor.articulo;
            select.options.add(nuevo);   
        });
    }, function (objetoError) {
        console.log('Error de lectura:' + objetoError.code);
    });
    
});

function actualizar(){
    var elmtTable = document.getElementById('Medica'); 
    var tableRows = elmtTable.getElementsByTagName('tr'); 
    document.getElementById("cantidad").value = 1;
    
    var articulo;
    referencia.on('value', function (datos) {
    articulo= document.getElementById("Medica").value;
    $.each(productos, function (indice, valor) {
        var prevProducto ='<tr>';
        if(valor.articulo == articulo){
        document.getElementById("nombre").value = valor.articulo;
        document.getElementById("precio").value = valor.precio;
        $('#imagen').attr('src',valor.imagen);
        document.getElementById("subtotal").value = valor.precio;
        }
    });
});
};

function subtotal(){
    var sub = document.getElementById("precio").value * document.getElementById("cantidad").value;
    document.getElementById("subtotal").value =  sub;
}

function carrito(){
    const arti = [];
    const sub = [];
    existe = new Boolean(false);
    $("#agregaralcarrito").css("display","block");
    $("#tituloPedidos").css("display","block");
    var subtotal =  document.getElementById("subtotal").value;
    var nombre =  document.getElementById("nombre").value;
    var precio =  document.getElementById("precio").value;
    var imagen =  document.getElementById("imagen").src;
    var cantidad =  document.getElementById("cantidad").value;
    var x = 0;
    var y = 0;
    var Ssub = 0;
    var iva =0;
    var total = 0;
    $("#pedidos tbody tr").each(function (index) {
       
     var caso1,caso4;
       $(this).children("th").each(function (index2) {
       switch (index2) {
       case 0:
        caso1 = $(this).text();
        arti[x]=caso1 ;
        x = x+1;
       break;
       }
     });
     });
     for (var i = 0; i < arti.length; i++){
        if(arti[i] == nombre){
            alert("El producto ya esta pedido");
            existe=true;
        } 
    }
   
    if(existe == false){
    var prevProducto ='<tr>';
    prevProducto+='<th scope="row" class="nombre">'+nombre+'</th>';
    prevProducto+='<th>'+precio+'</th>';
    prevProducto+='<th>'+'<img src="' + imagen+ '"/>'+'</th>';
    prevProducto+='<th>'+ cantidad+'</th>';
    prevProducto+='<th>'+subtotal+'</th>';
    prevProducto+='</tr>'
    $(prevProducto).appendTo('#listado');

    $("#pedidos tbody tr").each(function (index) {
       
        var caso1,caso4;
          $(this).children("th").each(function (index2) {
          switch (index2) {
          case 4:
           caso4 = $(this).text();
           sub[y]=caso4 ;
           y = y+1;
          break;
          }
        });
        });

        for (var i = 0; i < sub.length; i++){
            Ssub = Ssub + parseFloat(sub[i]);
        }
        document.getElementById("Subtotal").value = Ssub;
        iva = Ssub * 0.12;
        iva = iva.toFixed(2);
        total = Ssub+iva;
       

        document.getElementById("Iva").value = iva;
        document.getElementById("TOTAL").value = total;
    }
<<<<<<< HEAD
}

function envioReporte(){
    const datos = [];
    
    var subtotal =  document.getElementById("Subtotal").value;
    var nombre =  document.getElementById("Iva").value;
    var precio =  document.getElementById("TOTAL").value;

=======
    
>>>>>>> 01407571ca4f152700358908aafef85f30664288
}