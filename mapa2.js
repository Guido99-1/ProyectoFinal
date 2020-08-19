 // var map = L.map('map').setView([-1.2490800, -78.6167500], 15);
  async function mapa(){

    async function getData(url) {

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const consulta4 = await getData("../PHP/datos.php");
    
    var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    var map = new L.Map('map', {
        'center': [-1.2490800, -78.6167500],
        'zoom': 13,
        'layers': [tileLayer]
    });


    let iconMarker = L.icon({
        iconUrl: '../Imagenes/marker.png',
        iconSize: [60, 60],
        iconAnchor: [30, 60]
    });
    
    L.control.scale().addTo(map);
    L.marker([consulta4[0].latitud, consulta4[0].longitud]).addTo(map).bindPopup('<h3>DESTINO DE ENVIO</<h3>');


}
mapa();

