// Client facing scripts here
$(document).ready(function() {

  const renderMaps = function(db) {
    for (let mapData of db) {
      $('#map-grid').append(`
        <div id="map-box">
          <div id="map-${mapData.id}" style="height: 300px; width: 400px; margin: 3px; border: 0.25px solid lightgray; border-radius: 10px;"></div>
          <a id="map-box-text" style="text-decoration: none" href="http://localhost:8080/${mapData.id}">
            <div id="map-box-text-title">${mapData.title}</div>
            <div id="map-box-text-location"><i class="fa-solid fa-map-pin" style="color: red;"></i> ${mapData.city}, ${mapData.country}</div>
          </a>
        </div>
      `);

      let map = L.map('map-' + mapData.id).setView([mapData.latitude, mapData.longitude], mapData.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
    }
  };

  const loadMaps = function() {
    $.ajax('/api/maps', { method: 'GET' })
    .then(renderMaps);
  };

  loadMaps();


  $("#map-box").click(function() {
    console.log("heard the click!");
  });

});
