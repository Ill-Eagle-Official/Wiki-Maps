$(document).ready(function() {
  console.log("Hello are you here?")

  let map;

  const renderSingleMap = function (mapData, className) {

    $('#map-box').append(`
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

    let marker = L.marker();

  map.on('click', function(e) {
    marker
    .setLatLng(e.latlng)
    .bindPopup(`
    <form action="/api/maps/${mapData.id}" method="POST">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" required><br>
      <label for="country">Description</label>
      <input type="text" name="description" id="description" required><br>
      <label for="city">Image URL</label>
      <input type="text" name="image_url" id="image_url" required>
      <input type="hidden" name="latitude" id="latitude" value="${e.latlng.lat}">
      <input type="hidden" name="longitude" id="longitude" value="${e.latlng.lng}">
      <input type="submit" value="Submit">
    </form>
    `)
    .openPopup()
    .addTo(map);
  });
}

  const renderPins = function (db, mapData) {

    for (let pin of db) {

        let marker = L.marker([pin.latitude, pin.longitude])
          .addTo(map)

        marker.bindPopup(
          `<img src="${pin.image_url}" width="100" height="100"><br>
        <b>${pin.title}</b><br>
        ${pin.description}`
        ).closePopup();
      }
    }

  const renderMaps = function (db) {

    // for (let mapData of db[0]) {
      // console.log(db);
      // console.log(mapData);
      renderSingleMap(db[0], 'map-single')
      renderPins(db[1], db[0])
    // };
  }

  const loadMaps = function () {
    const mapId = $('#map_id').val();
    // console.log(mapId);
    $.ajax(`/api/maps/${mapId}`, { method: 'GET' })
      .then(renderMaps);
  };

  loadMaps();

});



  // AJAX POST request when submit button is clicked

  // $('.submission-form').on('submit', function(event) {
  //   event.preventDefault();
  //   let data = $(this).serialize();
  //   console.log(data);
  //   $.ajax({
  //     url: '/api/maps/',
  //     method: 'POST',
  //     data: data
  //   }).done((response) => {
  //     console.log(response);
  //     window.location.href = `/maps/${response.map_id}`;
  //   });
  // });


