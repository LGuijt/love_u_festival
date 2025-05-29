const imageWidth = 2000;
const imageHeight = 1500;

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "nl"); // Default language is Dutch
  lang = "nl";
} else {
  lang = localStorage.getItem("lang"); // Get the language from localStorage
}

const markerArray = {
  ingang: [
    350,
    1375,
    "assets/img/map/ingang.svg",
    "Ingang/Uitgang",
    "Entrance/Exit",
  ],
  Ponton: [600, 410, "assets/img/map/ponton.svg", "Ponton", "Ponton"],
  Lake: [800, 1075, "assets/img/map/lake.svg", "Lake", "Lake"],
  Club: [875, 1400, "assets/img/map/club.svg", "Club", "Club"],
  Hangar: [1125, 1800, "assets/img/map/hangar.svg", "Hangar", "Hangar"],
  toilet1: [425, 155, "assets/img/map/toilet.svg", "Toilet", "Toilet"],
  toilet2: [1020, 980, "assets/img/map/toilet.svg", "Toilet", "Toilet"],
  toilet3: [1030, 1860, "assets/img/map/toilet.svg", "Toilet", "Toilet"],
  merch1: [410, 370, "assets/img/map/merch.svg", "Merchandise", "Merchandise"],
  merch2: [850, 625, "assets/img/map/merch.svg", "Merchandise", "Merchandise"],
  merch3: [870, 1300, "assets/img/map/merch.svg", "Merchandise", "Merchandise"],
  ice1: [
    550,
    525,
    "assets/img/map/ice.svg",
    "De Dom Ijskraam",
    "The Dom Ice-cream Stall",
  ],
  ice2: [
    850,
    775,
    "assets/img/map/ice.svg",
    "Drakestein's Ijs",
    "Drakestein's Ice-cream",
  ],
  ice3: [
    950,
    1250,
    "assets/img/map/ice.svg",
    "Nijntje's Ijspaleis",
    "Miffy's Ice Palace",
  ],
  ice4: [
    1100,
    1650,
    "assets/img/map/ice.svg",
    "Softijs van Buys Ballot",
    "Soft Ice from Buys Ballot",
  ],
  food1: [
    600,
    225,
    "assets/img/map/food.svg",
    "Claudia's Eettent",
    "Claudia's Food Stall",
  ],
  food2: [
    820,
    710,
    "assets/img/map/food.svg",
    "De Slimste Foodtruck",
    "The Smartest Food Truck",
  ],
  bar1: [
    480,
    225,
    "assets/img/map/bar.svg",
    "De bar van Dokter Pop",
    "The Doctor Pop Bar",
  ],
  bar2: [
    850,
    1000,
    "assets/img/map/bar.svg",
    "Bier van Bruna",
    "Beer from Bruna",
  ],
  bar3: [
    1000,
    1440,
    "assets/img/map/bar.svg",
    "Rietveld's Bar",
    "Rietveld's Bar",
  ],
  bar4: [1000, 1625, "assets/img/map/bar.svg", "Röntgen", "X-ray"],
  EHBO: [960, 365, "assets/img/map/ehbo.svg", "EHBO", "First Aid"],
  locker1: [375, 475, "assets/img/map/locker.svg", "Lockers", "Lockers"],
  locker2: [375, 600, "assets/img/map/locker.svg", "Lockers", "Lockers"],
};
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

let liveIcon = L.icon({
  iconUrl: "assets/img/map/pijl.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

let liveMarker = null;
let lastCoords = null;

navigator.geolocation.watchPosition(
    function () {
      // Simuleer locatie tussen 50%-95% van de hoogte (onderkant van de afbeelding)
      const simLat = (0.5 + Math.random() * 0.45) * imageHeight; // 50% - 95% van de hoogte
      const simLon = Math.random() * imageWidth;
      
      const y = simLat / 2; // Geen omdraaiing
      const x = simLon / 2;
      
      const currentCoords = [y, x];
  
      // Bereken draaihoek
      let rotation = 0;
      if (lastCoords) {
        const dx = x - lastCoords[1];
        const dy = y - lastCoords[0];
        rotation = Math.atan2(dy, dx) * (180 / Math.PI);
      }
      lastCoords = currentCoords;
  
      // Maak of verplaats marker
      if (!liveMarker) {
        liveMarker = L.marker(currentCoords, {
          icon: liveIcon
        }).addTo(map);
      } else {
        liveMarker.setLatLng(currentCoords);
      }
  
      // Draai het icoon
      if (liveMarker._icon) {
        liveMarker._icon.style.transform = `rotate(${rotation}deg)`;
        liveMarker._icon.style.transition = 'transform 0.2s linear';
      }
  
      // Debug output
      console.log("Marker positie (y, x):", currentCoords);
    },
    function (error) {
      console.error("Fout bij locatie:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 5000
    }
  );

for (i = 0; i < Object.keys(markerArray).length; i++) {
  const markerName = Object.keys(markerArray)[i];
  const markerPosition = markerArray[markerName];
  if (i === 0) {
    size = 75; // Special case for the entrance marker
  } else {
    size = 25; // Default size for other markers
  }
  let markerIcon = L.icon({
    iconUrl: markerPosition[2],
    iconSize: [size, size], // Set the size of the icon
    // iconAnchor: [0, 0], // Set the anchor point of the icon
  });
  if (lang === "nl") {
    titel = markerPosition[3]; // Use the Dutch name
  } else if (lang === "en") {
    titel = markerPosition[4]; // Use the English name
  }
  const marker = L.marker([markerPosition[0], markerPosition[1]], {
    icon: markerIcon,
  }).addTo(map);
  marker.bindPopup(`<b>${titel}</b>`);
}
