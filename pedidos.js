var config = {
    apiKey: "AIzaSyDmSgbd1fC4137aOFsl_onDafluxmZB6y4",
    authDomain: "prueba2-a725c.firebaseapp.com",
    databaseURL: "https://prueba2-a725c.firebaseio.com",
    projectId: "prueba2-a725c",
    storageBucket: "prueba2-a725c.appspot.com",
    messagingSenderId: "422920973317",
    appId: "1:422920973317:web:0738836eb10d1e40de806c"

};

firebase.initializeApp(config);

var database = firebase.database();
var referencia = database.ref("pedidos");
var pedidos = {};

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