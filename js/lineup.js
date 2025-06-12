let container = document.getElementById("lineup-container");
let idArray = ["day", "stage", "type"];
let dayfilter = false;
let stagefilter = false;
let typefilter = false;
let dayvalue, stagevalue, typevalue;

const typeArray = {
  0: [3, 4, 5, 32, 33],
  1: [2, 23, 24, 25, 26, 27, 28, 29, 30, 31, 47, 48, 49, 50, 51, 52, 53, 54],
  2: [6, 7, 34, 35],
  3: [17, 18, 19, 20, 21, 22, 42, 43, 44, 45, 46],
  4: [8, 9, 10, 11, 12, 13, 14, 15, 16, 36, 37, 38, 39, 40, 41],
};

if (localStorage.getItem("lang") == null) {
  localStorage.setItem("lang", "nl");
  lang = "nl";
} else {
  lang = localStorage.getItem("lang");
}

async function getSchedule() {
  const res = await fetch("../functions/getSchedule.php?lang=" + lang, {
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

async function makeSchedule() {
  const data = await getSchedule();

  data.forEach((data) => {
    if (dayfilter) {
      console.log("Day filter is active with value:", dayvalue);
      if (dayvalue !== data.day) {
        console.log("Skipping item due to day filter:", data);
        return; // Skip this item if it doesn't match the day filter
      }
    }

    if (stagefilter) {
      console.log("Stage filter is active with value:", stagevalue);
      if (stagevalue !== data.podium) {
        console.log("Skipping item due to stage filter:", data);
        return; // Skip this item if it doesn't match the stage filter
      }
    }

    if (typefilter) {
      console.log("Type filter is active with value:", typevalue);
      if (!typeArray[typevalue].includes(data.id)) {
        console.log("Skipping item due to type filter:", data);
        return; // Skip this item if it doesn't match the type filter
      }
    }
    let lineUpItem = document.createElement("a");
    lineUpItem.className = "line-up-item";

    let name = document.createElement("h4");
    name.className = "name";
    name.innerHTML = data.name;
    lineUpItem.appendChild(name);

    let arrow = document.createElement("p");

    arrow.className = "arrow";
    arrow.innerHTML = "&#8594;"; // Unicode voor pijl naar rechts
    lineUpItem.appendChild(arrow);

    lineUpItem.href = "act.html?id=" + data.id;
    container.appendChild(lineUpItem);
  });
}

makeSchedule();

function formatTime(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.warn("Ongeldig tijd-getal:", number);
    return "??:??";
  }
  // Zorg ervoor dat het getal 4 cijfers heeft (bv. 930 -> "0930")
  const str = number.toString().padStart(4, "0");

  // Eerste 2 cijfers = uren, laatste 2 = minuten
  const hours = str.substring(0, 2);
  const minutes = str.substring(2, 4);

  return `${hours}:${minutes}`;
}

for (let i = 0; i < idArray.length; i++) {
  const element = document.getElementById(idArray[i]);
  if (element) {
    element.addEventListener("click", function () {
      child = idArray[i] + "-options";
      newElement = document.getElementById(child);
      if (newElement) {
        newElement.classList.toggle("hidden");
        //make other elements hidden
        idArray.forEach((id) => {
          if (id !== idArray[i]) {
            const otherElement = document.getElementById(id + "-options");
            if (otherElement) {
              otherElement.classList.add("hidden");
            } else {
              console.warn(`Element met ID ${id} niet gevonden.`);
            }
          }
        });
      } else {
        console.warn(`Element met ID ${child} niet gevonden.`);
      }
    });
  } else {
    console.warn(`Element met ID ${idArray[i]} niet gevonden.`);
  }
}

function filters(type, value) {
  if (type === "day") {
    if (value === "all") {
      dayfilter = false;
      dayvalue = null;
    } else {
      dayfilter = true;
      dayvalue = value;
    }
    console.log("Day filter set to:", dayfilter, "with value:", dayvalue);
  } else if (type === "stage") {
    if (value === "all") {
      stagefilter = false;
      stagevalue = null;
    } else {
      stagefilter = true;
      stagevalue = value;
    }
    console.log("Stage filter set to:", stagefilter, "with value:", stagevalue);
  } else if (type === "type") {
    if (value === "all") {
      typefilter = false;
      typevalue = null;
    } else {
      typefilter = true;
      typevalue = value;
    }
    console.log("Type filter set to:", typefilter, "with value:", typevalue);
  }

  container.innerHTML = ""; // Clear the container before re-populating it
  makeSchedule();
}
