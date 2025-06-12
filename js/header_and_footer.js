fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    initLanguage(); // << hier pas uitvoeren nadat de header geladen is
    initColor(); // Assuming this function is defined elsewhere
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));

function initLanguage() {
  let lang = localStorage.getItem("lang") || "nl";
  localStorage.setItem("lang", lang);
  updateFlags(lang);
  footerText(lang);
}

function initColor() {
  let color = localStorage.getItem("color") || "light"; // Default to light mode
  const colorToggle = document.getElementById("colorToggle");
  if (colorToggle) {
    colorToggle.addEventListener("click", toggleColor);
  }
  updateColor(color);
}

function toggleLang() {
  let lang = localStorage.getItem("lang") === "nl" ? "en" : "nl";
  localStorage.setItem("lang", lang);
  updateFlags(lang);
  footerText(lang);
}

function toggleColor() {
  let color = localStorage.getItem("color") === "light" ? "dark" : "light";
  localStorage.setItem("color", color);
  updateColor(color);
}

function updateFlags(lang) {
  const nlFlag = document.getElementById("nlFlag");
  const enFlag = document.getElementById("enFlag");

  if (!nlFlag || !enFlag) return;

  if (lang === "en") {
    enFlag.style.display = "block";
    nlFlag.style.display = "none";
  } else {
    enFlag.style.display = "none";
    nlFlag.style.display = "block";
  }
}

function updateColor(color) {
  let elements = document.querySelectorAll(".toggle");
  elements.forEach(element => {
    if (color === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  });
}


//get data form json file teksten.json
async function getJsonText() {
  try {
    const response = await fetch("../teksten.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading texts:", error);
  }
}

async function footerText(lang) {
  const data = await getJsonText();
  if (!data) return;
  ParsedData = JSON.parse(JSON.stringify(data)); // Ensure data is in the correct format
  for (let i = 0; i < ParsedData.paginas.length; i++) {
  let paginaTeksten = ParsedData.paginas[i].teksten;

  paginaTeksten.forEach(e => {
    let element = document.getElementById(e.naam);
    if (element) {
    if (lang === "en") {
      element.innerHTML = e.en;
    }
    else if (lang === "nl") {
      element.innerHTML = e.nl;
    }
    }
  });
}
}