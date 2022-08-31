$(document).ready(function() {

  const renderMaps = function(db) {
    for (let mapData of db) {
      console.log("mapData is: ", mapData);
      $('#my-map-grid').append(`
        <div class="my-map-box-${mapData.id}" style="background-color: white; border-radius: 8px; margin: 10px; padding: 5px; padding-bottom: 30px;">
          <div id="map-${mapData.id}" style="height: 300px; width: 400px; margin: 3px; border: 0.25px solid lightgray; border-radius: 10px;"></div>

          <div class="my-map-title">
            <span>${mapData.title}</span>
            <button class="edit-my-map" value="${mapData.id}">Edit</button>
          </div>

          <div class="my-map-location">
            <div class="my-map-location-left">
              <i class="fa-solid fa-map-pin"></i>
              <span>${mapData.city}, ${mapData.country}</span>
            </div>
            <button class="delete-my-map" value="${mapData.id}">Delete</button>
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

  // render all the maps created by the user on the page once the page is loaded
  const loadMaps = function() {
    $.ajax('/my-maps/api', { method: 'GET' })
      .then((res) => {
        renderMaps(res);
      });
  }

  loadMaps();

  // delete button handeler to delete the map
  $(document).on('click', ".delete-my-map", function() {
    const del_id = $(this).attr("value");
    const url = "/my-maps/delete/" + del_id;
    if(confirm("Are you sure you want to delete this map?")) {
      $.ajax(url, { method: 'POST' })
      $(".my-map-box-" + del_id).remove();
    }
  })



})
