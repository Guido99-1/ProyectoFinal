var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var map = new L.Map('map', {
    'center': [-1.2490800, -78.6167500],
    'zoom': 13,
    'layers': [tileLayer]
});


L.control.scale().addTo(map);
L.marker([-1.2490800, -78.6167500]).addTo(map).bindPopup('<h3>CIUDAD AMBATO</<h3>');

map.doubleClickZoom.disable();
var marker;
var popup = L.popup();
var direccion="";
map.on('dblclick', function (e) {
    if (marker) {
        map.removeLayer(marker);
    }
    direccion=e.latlng;
    // alert(direccion.lat.toString());
    marker = new L.Marker(e.latlng).addTo(map)
    .bindPopup('<h3>Destino de Envio</h3>'+'<br> latitud: '+direccion.lat.toString()+'<br> longitud: '+direccion.lng.toString());
    var latitud =direccion.lat;
    var longitud =direccion.lng;
    document.getElementById("latitud").innerText = latitud;
    document.getElementById("longitud").innerText = longitud;
    
});