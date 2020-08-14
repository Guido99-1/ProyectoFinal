$(document).ready(function () {
    // Inicializar la base de datos
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

    // Fijarse que la ruta de partida ahora es la colección productos:
    var referencia = database.ref("productos");

    var productos = {};

    /*
    Evento: value

    The value event is used to read a static snapshot of the contents at a given database path,
    as they existed at the time of the read event. It is triggered once with the initial data and again every time the data changes.
    The event callback is passed a snapshot containing all data at that location, including child data. In our code example above,
    value returned all of the blog posts in our app. Everytime a new blog post is added, the callback function will return all of the posts.
    */

    referencia.on('value', function (datos) {
        productos = datos.val();

        $.each(productos, function (indice, valor) {
            var prevProducto ='<tr>';
            prevProducto+='<th scope="row">'+valor.articulo+'</th>';
            prevProducto+='<th>'+valor.precio+'</th>';
            prevProducto+='<th>'+'<img src="' + valor.imagen + '"/>'+'</th>';
            prevProducto+='<th>'+valor.descripcion+'</th>';
            prevProducto+='<th scope="row">'+'<button type="button" class="btn btn-dark">'+'AGREGARA'+'</button>'+'</th>';
            prevProducto+='</tr>'
            $(prevProducto).appendTo('#listado');
        });
    }, function (objetoError) {
        console.log('Error de lectura:' + objetoError.code);
    });

});