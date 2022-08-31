

// Client facing scripts here
$(document).ready(function() {

  const renderSingleMap = function(mapData, className) {

    $('#map-grid').append(`
        <div id="${mapData.id}" class="map-box">
          <div id="map-${mapData.id}" class="map-content ${className}"></div>
          <div id="map-box-text">
            <div id="map-box-text-title">${mapData.title}</div>
            <div id="map-box-text-location"><i class="fa-solid fa-map-pin" style="color: red;"></i> ${mapData.city}, ${mapData.country}</div>
            <div class="favourite-icon"><i class="fa-solid fa-heart"></i></div>

          </div>
          </div>
        </div>
      `);

      let map = L.map('map-' + mapData.id).setView([mapData.latitude, mapData.longitude], mapData.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);

    }

  const renderPins = function(db) {

    console.log("renderPins");
    for (let pinData of db) {
      console.log('this is pinData', pinData);
      console.log('this is db', db);
      marker = L.marker([pinData.latitude, pinData.longitude]).addTo(map);

    }

  }

  const pinRender = function(db) {
    for (let pinData of db) {
      if(pinData.map_id === mapData.id) {
        console.log('this is pinData', pinData);
        console.log(mapData.id);
        marker = L.marker([pinData.latitude, pinData.longitude]).addTo(map);
      }

    }
  }



  const renderMaps = function(db) {
    for (let mapData of db) {

      renderSingleMap(mapData, 'map-box-text');
      pinRender(db);

      $(`#${mapData.id}`).click(function() {

          $('#map-grid').empty();
          renderSingleMap(mapData, 'map-single')
          $('#map-grid').css('display', 'flex');

        })
        // console.log(mapData.id);
      };

    }



  const loadMaps = function() {
    $.ajax('/api/maps', { method: 'GET' })
    .then(renderMaps);
  };

  const loadPins = function() {
    console.log('loadPins');
     $.ajax('/api/pins', { method: 'GET'})
     .then(renderPins);
  }

  loadMaps();
  loadPins();

});
