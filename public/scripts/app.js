// Client facing scripts here

const fakeMaps = {
  vancouver: {
    latitude: 49.246,
    longitude: -123.116,
    zoom: 11
  },
  moscow: {
    latitude: 55.751,
    longitude: 37.618,
    zoom: 11
  },
  cairo: {
    latitude: 30.033,
    longitude: 31.233,
    zoom: 11
  },
  berlin: {
    latitude: 52.520,
    longitude: 13.404,
    zoom: 11
  },
  thunderBay: {
    latitude: 48.382,
    longitude: -89.246,
    zoom: 11
  },
  tainan: {
    latitude: 22.999,
    longitude: 120.227,
    zoom: 11
  },
  manila: {
    latitude: 14.599,
    longitude: 120.984,
    zoom: 11
  },
  saoPaulo: {
    latitude: -23.533,
    longitude: -46.625,
    zoom: 11
  },
  perth: {
    latitude: -31.953,
    longitude: 115.857,
    zoom: 11
  },
};

$(document).ready(function () {

  const renderMaps = function () {

    for (let city in fakeMaps) {

      $('#map-row').append(`<div id="map-${city}" style="height: 200px; width: 300px; margin: 5px; border-radius: 8px"></div>`);

      console.log(fakeMaps[city]);

      let map = L.map('map-' + city).setView([fakeMaps[city].latitude, fakeMaps[city].longitude], fakeMaps[city].zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
    }
  };

  renderMaps();
})
