const imageWidth = 2000;
const imageHeight = 1500;

const markerArray = {
    "Ponton": [500, 1200],
    "Lake": [1200, 800],
    "Club": [1500, 400],
    "Hangar": [1800, 1000],
    "toilet1": [300, 1300],
    "toilet2": [1700, 1300],
    "toilet3": [1000, 1300],
    "merch1": [400, 1100],
    "merch2": [1600, 1100],
    "merch3": [1200, 1100],
    "ice1": [600, 900],
    "ice2": [1400, 900],
    "ice3": [800, 900],
    "food1": [200, 1000],
    "food2": [1800, 1200],
    "bar1": [300, 800],
    "bar2": [1700, 800],
    "bar3": [1000, 800],
    "bar4": [1500, 600],
    "EHBO": [900, 1300],
    "ingang": [750, 1000],
}
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 4,
  zoomControl: true,
});

// Bepaal de grenzen van de kaart
const bounds = [
  [0, 0],
  [imageHeight, imageWidth],
];

// Voeg de afbeelding toe
L.imageOverlay("assets/img/map/plattegrond.svg", bounds).addTo(map);
map.fitBounds(bounds);

// Voorbeeld marker
const marker = L.marker([750, 1000]).addTo(map);
marker.bindPopup("<b>Ingang</b><br>Welkom!");

for(i = 0; i < Object.keys(markerArray).length; i++) {
    const markerName = Object.keys(markerArray)[i];
    const markerPosition = markerArray[markerName];
    const marker = L.marker(markerPosition).addTo(map);
    marker.bindPopup(`<b>${markerName}</b>`);
}