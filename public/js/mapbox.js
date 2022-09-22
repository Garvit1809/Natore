/* eslint-disable */
const locati = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locati);

import { accessToken, Map } from 'mapbox-gl/dist/mapbox-gl.js';

accessToken = 'pk.eyJ1IjoiZ2Fydml0MTgiLCJhIjoiY2w4N3E5MHA2MWI5eDN3czJ0cjNlNHB4aCJ9.2MwDFWHC30MaKFA174ScrA';

var map = new Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

console.log(map)