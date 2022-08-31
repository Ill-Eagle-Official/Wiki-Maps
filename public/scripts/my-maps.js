

$(document).ready(function() {
  const renderMaps = function(db) {
    for (let mapData of db) {
      console.log("mapData is: ", mapData);
      $('#my-map-grid').append(`
        <div class="my-map-box">
          <div id="map-${mapData.id}" style="height: 300px; width: 400px; margin: 3px; border: 0.25px solid lightgray; border-radius: 10px;"></div>

          <div class="my-map-title">
            <span>${mapData.title}</span>
            <button class="edit-button">Edit</button>
          </div>

          <div class="my-map-location">
            <div class="my-map-location-left">
              <i class="fa-solid fa-map-pin"></i>
              <span>${mapData.city}, ${mapData.country}</span>
            </div>
            <button class="delete-button">Delete</button>
          </div>
        </div>

      `);

      // js from leaflet to create a map
      let map = L.map('map-' + mapData.id).setView([mapData.latitude, mapData.longitude], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);

    }
  };

  const loadMaps = function() {
    $.ajax('/my-maps/api', { method: 'GET' })
      .then((res) => {
        console.log("res is: ", res);
        renderMaps(res);
      });

  }

  loadMaps();

})
