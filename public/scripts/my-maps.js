$(document).ready(function() {

  // render single map
  let map;
  const renderSingleMap = function (mapData, className) {
    $('#my-map-grid').append(`
        <div id ="my-map-box" class="my-map-box-${mapData.id}">
          <div id="map-${mapData.id}" class="my-map-content-${className}"></div>

          <div class="my-map-box-text">
            <div class="my-map-title-edit">
              <div class="${mapData.id}">
                <span class="my-map-title ${mapData.id}">${mapData.title}</span>
              </div>
              <div>
                <button class="edit-my-map" value="${mapData.id}">Edit</button>
              </div>
            </div>

            <div class="my-map-location">
              <div class="my-map-location-left ${mapData.id}">
                <i class="fa-solid fa-map-pin"></i>
                <span>${mapData.city}, ${mapData.country}</span>
              </div>
              <div>
                <button class="delete-my-map" value="${mapData.id}">Delete</button>
              </div>
            </div>
          </div>
        </div>

      `);

      // js from leaflet to create a map
      map = L.map(`map-${mapData.id}`).setView([mapData.latitude, mapData.longitude], mapData.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
  }

  // render pins for a map
  const renderPins = function(db, mapData) {
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

  const renderMaps = function(db) {
    for (let mapData of db[0]) {
      renderSingleMap(mapData, "small-map");
      renderPins(db[1], mapData);

      // event handler to show big map when click on a small map
      $(`.${mapData.id}`).click(function(event) {

        $('#my-map-grid').empty();
        renderSingleMap(mapData, 'map-single')
        renderPins(db[1], mapData)
        $('#my-map-grid').css('display', 'flex');

      })
    };
  }

  const loadMaps = function() {
    $.ajax('/my-maps/api', { method: 'GET' })
    .then((res) => {
      $('#my-map-grid').empty();
      renderMaps(res);
    });

  }


  // delete button handeler to delete the map
  $(document).on('click', ".delete-my-map", function() {
    const del_id = $(this).attr("value");
    const url = "/my-maps/delete/" + del_id;
    if(confirm("Are you sure you want to delete this map?")) {
      $.ajax(url, { method: 'POST' })
      .then(() => {
        //after the route is fired and completed the job, load maps again
        loadMaps();
      })
    }
  })

  // Edit button render and redirect
  $(document).on('click', ".edit-my-map", function() {
      console.log('Clicked edit button');
      window.location.assign('/my-maps/edit/' + $(this).attr('value'));
  })

  loadMaps();

})
