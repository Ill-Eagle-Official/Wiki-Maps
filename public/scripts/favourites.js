$(document).ready(function() {

   // render single favourite map
   let map;
   const renderSingleMap = function (mapData, className) {
     $('#my-fav-map-grid').append(`
         <div id ="my-fav-map-box" class="my--fav-map-box-${mapData.fav_id}">
           <div id="map-${mapData.fav_id}" class="my-fav-map-content-${className}"></div>

           <div class="my-fav-map-box-text">
             <div class="my-fav-map-title-edit">
               <div class="${mapData.fav_id}">
                 <span class="my-fav-map-title ${mapData.fav_id}">${mapData.title}</span>
               </div>
             </div>

             <div class="my-fav-map-location">
               <div class="my-fav-map-location-left ${mapData.fav_id}">
                 <i class="fa-solid fa-map-pin"></i>
                 <span>${mapData.city}, ${mapData.country}</span>
               </div>
               <div>
                 <button class="delete-my-fav-map" value="${mapData.fav_id}">Remove</button>
               </div>
             </div>
           </div>
         </div>

       `);

       // js from leaflet to create a map
       map = L.map(`map-${mapData.fav_id}`).setView([mapData.latitude, mapData.longitude], mapData.zoom);

       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '© OpenStreetMap'
       }).addTo(map);
   }

   const renderPins = function(db, mapData) {
     console.log("pin db is: ", db);
     console.log("mapData is: ", mapData);
    for (let pin of db) {
      if (pin.map_id === mapData.map_id) {
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
    console.log("db is: ", db);
    for (let mapData of db[0]) {

      renderSingleMap(mapData, "small-map");
      renderPins(db[1], mapData);

      // event handler to show big map when click on a small map
      $(`.${mapData.fav_id}`).click(function(event) {

        $('#my-fav-map-grid').empty();
        renderSingleMap(mapData, 'map-single')
        renderPins(db[1], mapData)
        $('#my-fav-map-grid').css('display', 'flex');

      })
    };
  }

  const loadMaps = function() {
    $.ajax('/favourites/api', { method: 'GET' })
    .then((res) => {
      // console.log("route is fired!")
      $('#my-fav-map-grid').empty();
      renderMaps(res);
    });

  }


  // Event handeler that removes the map from favourites
  $(document).on('click', ".delete-my-fav-map", function() {
    const del_id = $(this).attr("value");
    const url = "/favourites/delete/" + del_id;
    if(confirm("Are you sure you want to remove this map from favourites?")) {
      $.ajax(url, { method: 'POST' })
      .then(() => {
        //after the route is fired and completed the job, load maps again
        loadMaps();
      })
    }
  })

  loadMaps();




})
