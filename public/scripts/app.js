// Client facing scripts here
$(document).ready(function () {

  let map;

  const renderSingleMap = function (mapData, className) {

    $('#map-grid').append(`
        <div class="map-box">
          <div id="map-${mapData.id}" class="map-content ${className}"></div>
          <div id="${mapData.id}" class="map-box-text">
            <div id="map-box-text-title">${mapData.title}</div>
            <div id="map-box-text-location"><i class="fa-solid fa-map-pin" style="color: red;"></i> ${mapData.city}, ${mapData.country}</div>
          </div>
           <div class="favourite-icon"><i class="fa-solid fa-heart" data-id="${mapData.id}" id="heart-icon${mapData.id}"></i></div>
          </div>
      `);

    map = L.map('map-' + mapData.id).setView([mapData.latitude, mapData.longitude], mapData.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    $(`#heart-icon${mapData.id}`).click(function () {
      $.ajax(`/api/maps/favourites/${mapData.id}`, { method: 'POST' })
    })
  }

  const renderPins = function (db, mapData) {

    for (let pin of db) {

      if (pin.map_id === mapData.id) {

        let marker = L.marker([pin.latitude, pin.longitude])
          .addTo(map)

        marker.bindPopup(
          `<img src=${pin.image_url} width="100" height="100"><br>
        <b>${pin.title}</b><br>
        ${pin.description}`
        ).closePopup();
      }
    }
  };

  const renderMaps = function (db) {

    for (let mapData of db[0]) {

      renderSingleMap(mapData, 'map-box-text');
      renderPins(db[1], mapData)

      $(`#${mapData.id}`).click(function () {

        $('#map-grid').empty();
        renderSingleMap(mapData, 'map-single')
        renderPins(db[1], mapData)
        $('#map-grid').css('display', 'flex');
      })
    };
  }

  const loadMaps = function () {
    $.ajax('/api/maps', { method: 'GET' })
      .then(renderMaps);
  };

  loadMaps();

});
