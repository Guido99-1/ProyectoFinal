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

referencia.on('value',function(datos)
{
    // Eliminamos el contenido del listado para actualizarlo.
    $("#listado div.row").remove();

    productos=datos.val();

    // Recorremos los productos y los mostramos
    $.each(productos, function(indice,valor)
    {
        var prevProducto ='<tr>';
        prevProducto+='<th scope="row">'+valor.articulo+'</th>';
        prevProducto+='<th>'+valor.precio+'</th>';
        prevProducto+='<th>'+'<img src="' + valor.imagen + '"/>'+'</th>';
        prevProducto+='<th>'+valor.descripcion+'</th>';
        prevProducto+='<th scope="row">'+'<button type="button" class="btn btn-warning" onclick="editarProducto(\''+indice+'\')">Editar</button>'+'<button type="button" class="btn btn-danger" onclick="borrarProducto(\''+indice+'\')">Borrar</button>'+'</th>';
        prevProducto+='</tr>'
        $(prevProducto).appendTo('#listado');
        
    });

},function(objetoError){
    console.log('Error de lectura:'+objetoError.code);
});
function editarProducto(id)
{
    // Para pasar el ID a otro proceso lo hacemos a través de window.name
    window.name= id;
    // Cargamos la página editarproducto.html
    location.assign('editarproducto.html');
}

function borrarProducto(id)
{
    if (confirm("¿Está seguro/a de que quiere borrar este artículo?") == true)
    {
        referencia.child(id).remove();
    }
}