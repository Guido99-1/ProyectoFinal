var config = {
    apiKey: "AIzaSyDmSgbd1fC4137aOFsl_onDafluxmZB6y4",
    authDomain: "prueba2-a725c.firebaseapp.com",
    databaseURL: "https://prueba2-a725c.firebaseio.com",
    projectId: "prueba2-a725c",
    storageBucket: "prueba2-a725c.appspot.com",
    messagingSenderId: "422920973317",
    appId: "1:422920973317:web:0738836eb10d1e40de806c"

};
var numero ;
existe = new Boolean(false)
firebase.initializeApp(config);
var database = firebase.database();
var referencia2 = database.ref("pedidos");
var referencia3 = database.ref("detalle");
var pedidos = {};
var detalle = [];
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
    referencia2.on('value', function (datos) {
        pedidos = datos.val();
        var est = "false";
        $.each(pedidos, function (indice, valor) {
            if(valor.estado == est){
            var nuevo = document.createElement("option");
            nuevo.value = valor.id;
            nuevo.innerHTML = valor.id;
            select.options.add(nuevo);
            }   
        });
    }, function (objetoError) {
        console.log('Error de lectura:' + objetoError.code);
    });
});


function    (){
    if(existe==true){
    $("#listado tr").remove(); 
    }
    $("#map").css("display","block");
    var id = document.getElementById('Medica').value; 
    referencia3.on('value', function (datos) {
        detalle = datos.val();
    $.each(detalle, function (indice, valor) {
        if(valor.idpedido == id){
            var prevProducto ='<tr>';
            prevProducto+='<th scope="row" class="nombre">'+valor.articulo+'</th>';
            prevProducto+='<th>'+valor.precio+'</th>';
            prevProducto+='<th>'+valor.cantidad+'</th>';
            prevProducto+='<th>'+valor.subtotal+'</th>';
            prevProducto+='</tr>'
            $(prevProducto).appendTo('#listado');
        }
    });
    
   existe=true;
});
};