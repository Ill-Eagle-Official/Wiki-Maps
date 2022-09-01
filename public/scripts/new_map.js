(() => {

  let map;

  const addBlankMap = () => {

    map = L.map('map').setView([43.6532, -79.3832], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

  }

  addBlankMap();

});
