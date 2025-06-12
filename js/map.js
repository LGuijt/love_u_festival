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
    "../assets/img/map/ingang.svg",
    "Ingang/Uitgang",
    "Entrance/Exit",
  ],
  Ponton: [600, 410, "../assets/img/map/ponton.svg", "Ponton", "Ponton"],
  Lake: [800, 1075, "../assets/img/map/lake.svg", "Lake", "Lake"],
  Club: [875, 1400, "../assets/img/map/club.svg", "Club", "Club"],
  Hangar: [1125, 1800, "../assets/img/map/hangar.svg", "Hangar", "Hangar"],
  toilet1: [425, 155, "../assets/img/map/toilet.svg", "Toilet", "Toilet"],
  toilet2: [1020, 980, "../assets/img/map/toilet.svg", "Toilet", "Toilet"],
  toilet3: [1030, 1860, "../assets/img/map/toilet.svg", "Toilet", "Toilet"],
  merch1: [410, 370, "../assets/img/map/merch.svg", "Merchandise", "Merchandise"],
  merch2: [850, 625, "../assets/img/map/merch.svg", "Merchandise", "Merchandise"],
  merch3: [870, 1300, "../assets/img/map/merch.svg", "Merchandise", "Merchandise"],
  ice1: [
    550,
    525,
    "../assets/img/map/ice.svg",
    "De Dom Ijskraam",
    "The Dom Ice-cream Stall",
  ],
  ice2: [
    850,
    775,
    "../assets/img/map/ice.svg",
    "Drakestein's Ijs",
    "Drakestein's Ice-cream",
  ],
  ice3: [
    950,
    1250,
    "../assets/img/map/ice.svg",
    "Nijntje's Ijspaleis",
    "Miffy's Ice Palace",
  ],
  ice4: [
    1100,
    1650,
    "../assets/img/map/ice.svg",
    "Softijs van Buys Ballot",
    "Soft Ice from Buys Ballot",
  ],
  food1: [
    600,
    225,
    "../assets/img/map/food.svg",
    "Claudia's Eettent",
    "Claudia's Food Stall",
  ],
  food2: [
    820,
    710,
    "../assets/img/map/food.svg",
    "De Slimste Foodtruck",
    "The Smartest Food Truck",
  ],
  bar1: [
    480,
    225,
    "../assets/img/map/bar.svg",
    "De bar van Dokter Pop",
    "The Doctor Pop Bar",
  ],
  bar2: [
    850,
    1000,
    "../assets/img/map/bar.svg",
    "Bier van Bruna",
    "Beer from Bruna",
  ],
  bar3: [
    1000,
    1440,
    "../assets/img/map/bar.svg",
    "Rietveld's Bar",
    "Rietveld's Bar",
  ],
  bar4: [1000, 1625, "../assets/img/map/bar.svg", "Röntgen", "X-ray"],
  EHBO: [960, 365, "../assets/img/map/ehbo.svg", "EHBO", "First Aid"],
  locker1: [375, 475, "../assets/img/map/locker.svg", "Lockers", "Lockers"],
  locker2: [375, 600, "../assets/img/map/locker.svg", "Lockers", "Lockers"],
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
L.imageOverlay("../assets/img/map/plattegrond.svg", bounds).addTo(map);
map.fitBounds(bounds);

let liveIcon = L.icon({
  iconUrl: "../assets/img/map/pijl.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

let liveMarker = null;
let lastCoords = null;

const gpsTopLeft = [52.1715545, 4.5012199];       // Links boven
const gpsBottomRight = [52.1625545, 4.5272199];   // Rechts op startniveau

const imgTopLeft = [0, 0];               // Afbeelding coördinaten (0,0)
const imgBottomRight = [500, 1000];      // Onderste rechterhoek

function convertGpsToImageCoords(lat, lon) {
  const latRange = gpsTopLeft[0] - gpsBottomRight[0]; // Verschil in latitude
  const lonRange = gpsBottomRight[1] - gpsTopLeft[1]; // Verschil in longitude

  const xRatio = (lon - gpsTopLeft[1]) / lonRange;
  const yRatio = (lat - gpsBottomRight[0]) / latRange;

  const x = xRatio * 1000; // 1000 = afbeeldingbreedte in pixels
  const y = (1 - yRatio) * 1000; // omdraaien van Y-as

  return [y, x]; // [lat, lon] formaat voor Leaflet
}

navigator.geolocation.watchPosition(
  function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const currentCoords = convertGpsToImageCoords(lat, lon);

    // Bereken rotatie
    let rotation = 0;
    if (lastCoords) {
      const dx = currentCoords[1] - lastCoords[1];
      const dy = currentCoords[0] - lastCoords[0];
      rotation = Math.atan2(dy, dx) * (180 / Math.PI);
    }
    lastCoords = currentCoords;

    // Plaats marker
    if (!liveMarker) {
      liveMarker = L.marker(currentCoords, { icon: liveIcon }).addTo(map);
    } else {
      liveMarker.setLatLng(currentCoords);
    }

    // Draai icoon
    if (liveMarker._icon) {
      liveMarker._icon.style.transform = `rotate(${rotation}deg)`;
      liveMarker._icon.style.transition = "transform 0.2s linear";
    }

    console.log("Echte locatie:", lat, lon);
    console.log("Afbeeldingspositie (y, x):", currentCoords);
  },
  function (error) {
    console.error("Fout bij locatie:", error);
  },
  {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 5000,
  }
);


async function addMarkers() {
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

    let actInfo = null;
    let currentAct = null;
    let futureAct = null;
    let futureInfo = null;

    if (markerName === "Ponton") {
      currentAct = localStorage.getItem("ponton");
      futureAct = localStorage.getItem("f_ponton");
      console.log("check ponton");
    } else if (markerName === "Club") {
      currentAct = localStorage.getItem("club");
      futureAct = localStorage.getItem("f_club");
      console.log("check club");
    } else if (markerName === "Lake") {
      currentAct = localStorage.getItem("lake");
      futureAct = localStorage.getItem("f_lake");
      console.log("check lake");
    } else if (markerName === "Hangar") {
      currentAct = localStorage.getItem("hangar");
      futureAct = localStorage.getItem("f_hangar");
    }
    console.log("Current act: " + currentAct);
    if (currentAct !== null && currentAct !== "null") {
      console.log("Current act found in localStorage: " + currentAct);
      actInfo = await getActInfo(currentAct);
      console.log("Act info retrieved: ", actInfo);
      start = formatTime(actInfo.start_time);
      end = formatTime(actInfo.end_time);
      console.log(start, end);
    }

    if (futureAct !== null && futureAct !== "null") {
      console.log("Future act found in localStorage: " + futureAct);
      futureInfo = await getActInfo(futureAct);
      fStart = formatTime(futureInfo.start_time);
      fEnd = formatTime(futureInfo.end_time);
    }

    const marker = L.marker([markerPosition[0], markerPosition[1]], {
      icon: markerIcon,
    }).addTo(map);
    if (actInfo !== null && futureAct === null) {
      marker.bindPopup(
        `<b>${titel}</b><br>${actInfo.name}<br>${start} - ${end}<br>-<br>${futureInfo.name}<br>${fStart} - ${fEnd}`
      );
    } else if (actInfo !== null && futureAct === null) {
      marker.bindPopup(
        `<b>${titel}</b><br>${actInfo.name}<br>${start} - ${end}`
      );
    } else if (futureAct !== null && futureAct !== "null") {
      console.log("Future act info: ", futureAct);
      marker.bindPopup(
        `<b>${titel}</b><br>${actInfo.name}<br>${start} - ${end}<br><i>Toekomstige Act</i>`
      );
    } else {
      marker.bindPopup(`<b>${titel}</b>`);
    }
  }
}

addMarkers();

async function getActInfo(x) {
  const res = await fetch("../functions/getAct.php?id=" + x + "&lang=" + lang, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (data.data) {
    newData = data.data;
  } else {
    newData = null;
  }

  return newData;
}

function formatTime(number) {
  // Zorg ervoor dat het getal 4 cijfers heeft (bv. 930 -> "0930")
  const str = number.toString().padStart(4, "0");

  // Eerste 2 cijfers = uren, laatste 2 = minuten
  const hours = str.substring(0, 2);
  const minutes = str.substring(2, 4);

  return `${hours}:${minutes}`;
}
