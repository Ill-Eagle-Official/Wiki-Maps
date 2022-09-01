$(document).ready(function() {

  // const renderMaps = function(db) {
  //   for (let mapData of db) {
  //     console.log("mapData is: ", mapData);
  //     $('#my-map-grid').append(`
  //       <div class="my-map-box-${mapData.id}" style="background-color: white; border-radius: 8px; margin: 10px; padding: 5px; padding-bottom: 30px;">
  //         <div id="map-${mapData.id}" style="height: 300px; width: 400px; margin: 3px; border: 0.25px solid lightgray; border-radius: 10px;"></div>

  //         <div class="my-map-title">
  //           <span>${mapData.title}</span>
  //           <button class="edit-my-map" value="${mapData.id}">Edit</button>
  //         </div>

  //         <div class="my-map-location">
  //           <div class="my-map-location-left">
  //             <i class="fa-solid fa-map-pin"></i>
  //             <span>${mapData.city}, ${mapData.country}</span>
  //           </div>
  //           <button class="delete-my-map" value="${mapData.id}">Delete</button>
  //         </div>
  //       </div>

  //     `);

  //     // js from leaflet to create a map
  //     let map = L.map('map-' + mapData.id).setView([mapData.latitude, mapData.longitude], 12);

  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 19,
  //       attribution: '© OpenStreetMap'
  //     }).addTo(map);



  //   }
  // };

  // // render all the maps created by the user on the page once the page is loaded
  // const loadMaps = function() {
  //   $.ajax('/my-maps/api', { method: 'GET' })
  //     .then((res) => {
  //       renderMaps(res);
  //     });
  // }

  // loadMaps();



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
      // console.log("mapData is: ", mapData)
      renderSingleMap(mapData, "small-map");
      renderPins(db[1], mapData);

      $(`.${mapData.id}`).click(function(event) {


        // $(".edit-my-map").off("click");
        //$('.delete-my-map').off('click', `#${mapData.id}`);


        console.log("clicked heard!")
        console.log("mapData is: ", mapData)

        $('#my-map-grid').empty();
        renderSingleMap(mapData, 'map-single')
        renderPins(db[1], mapData)
        $('#my-map-grid').css('display', 'flex');

      })
    // console.log(mapData.id);
    };
  }

  const loadMaps = function() {
    $.ajax('/my-maps/api', { method: 'GET' })
    .then((res) => {
      console.log("res from route is: ", res);
      renderMaps(res);
    });

  }


  // delete button handeler to delete the map
  $(document).on('click', ".delete-my-map", function() {
    const del_id = $(this).attr("value");
    const url = "/my-maps/delete/" + del_id;
    if(confirm("Are you sure you want to delete this map?")) {
      $.ajax(url, { method: 'POST' })
      // loadMaps();
      // $(".my-map-box-" + del_id).remove();
    }
    // loadMaps();
  })



  loadMaps();

})
