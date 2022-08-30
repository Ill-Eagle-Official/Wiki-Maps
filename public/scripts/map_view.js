$(() => {

  const map = L.map('map').setView([mapLat, mapLng], 13);

  // Map tile layer

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
  }
  ).addTo(map);

});
