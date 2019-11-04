$(document).ready(function(){
    var map = L.map('map', {
        center: [31.471162, 74.472392],
        minZoom: 11,
        maxZoom: 24
    });
    map.fitBounds([
        [31.462999, 74.466902],
        [31.476847, 74.477436]
    ]);
   
    var esriimagery = L.esri.basemapLayer("Imagery");
    var esristreets = L.esri.basemapLayer("Streets");
    var esritopo = L.esri.basemapLayer("Topographic").addTo(map);

    var baseLayers = {
        "Streets": esristreets,
        "Satellite": esriimagery,
        "Topographic": esritopo
    
    };

    var overlays = {};
    var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

    var drgcc = L.tileLayer.wms('https://zngeomatics.s3.amazonaws.com/DRGCC/data2d/{z}/{x}/{y}.png', {
        minZoom: 5,
        minNativeZoom: 10,
        maxZoom: 24,
        attribution: 'DRGCC Imagery © <a href="https://www.zameen.com/">Zameen.com</a>',
        format: 'image/png',
        transparent: true
    }).addTo(map);
    layerControl.addOverlay(drgcc, "DRGCC - 2D Imagery");
});