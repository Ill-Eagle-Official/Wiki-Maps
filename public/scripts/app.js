// Client facing scripts here
$(document).ready(function() {

  const renderMaps = function(db) {

    for (let mapData of db) {

      console.log(mapData);

      $('#map-row').append(`
        <div id="map-box" style="background-color: white; border-radius: 8px; margin: 10px; padding: 5px; padding-bottom: 30px;">
          <div id="map-${mapData.city}" style="height: 200px; width: 300px; margin: 5px; border: 0.25px solid lightgray; border-radius: 8px"></div>
        </div>
      `);

      let map = L.map('map-' + mapData.city).setView([mapData.latitude, mapData.longitude], 12);

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
});
