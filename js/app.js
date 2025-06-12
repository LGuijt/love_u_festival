async function updateActs() {
  // Dynamisch dag bepalen
  let date = new Date();
  let options = { weekday: "long" };
  let dayOfWeek = date.toLocaleDateString("en-US", options);

  let day = ["Monday", "Wednesday", "Friday", "Sunday"].includes(dayOfWeek)
    ? "1"
    : "0";

    localStorage.setItem("day", day);
  // Dynamisch tijd bepalen
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let time = hours * 100 + minutes;
  localStorage.setItem("time", time);

  async function getCurrentAct(x) {
    if (x !== 0) {
      if (minutes >= 45) {
        tempMin = 60 - minutes;
        tempMin = 15 - tempMin; // convert to minutes
        tempHour = hours + 1;
        time = tempHour * 100 + tempMin; // convert to minutes
      } else {
        time += 15; // subtract 15 minutes for the current act
      }
    }
    const res = await fetch(
      "../functions/currentAct.php?day=" + day + "&time=" + time,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.data) {
      newData = data.data;
    } else {
      newData = null;
    }

    return newData;
  }

  let currentActs = await getCurrentAct(0);
  let futureActs = await getCurrentAct(1);

  // Verwijder dubbele acts
  if (currentActs && futureActs) {
    for (let i = 0; i < futureActs.length; i++) {
      for (let j = 0; j < currentActs.length; j++) {
        if (futureActs[i].id === currentActs[j].id) {
          futureActs.splice(i, 1);
          i--;
          break;
        }
      }
    }
  }

  fillInfo(currentActs || []);
  fillFutureInfo(futureActs || []);
}

// Initiale call bij pagina laden
updateActs();

// Daarna elke minuut uitvoeren
setInterval(updateActs, 60 * 1000);

function fillInfo(currentActs) {
  let headerBanner = document.getElementById("headerBanner");
  let homePageBox = document.getElementById("homePageBox");

  if (headerBanner) {
    headerBanner.innerHTML = ""; // Clear previous content
    currentActs.forEach((e) => {
      let span = document.createElement("span");
      span.className = "actName";
      podium = podiumName(e.podium);
      span.innerHTML = podium + " - " + e.name;
      headerBanner.appendChild(span);
    });
  }

  if (homePageBox) {
    homePageBox.innerHTML = ""; // Clear previous content
    currentActs.forEach((e) => {
      let p = document.createElement("p");
      p.className = "actName";
      podium = podiumName(e.podium);
      p.innerHTML = podium + " - " + e.name;
      homePageBox.appendChild(p);
    });
  }

  localStorage.setItem("ponton", null);
  localStorage.setItem("club", null);
  localStorage.setItem("lake", null);
  localStorage.setItem("hangar", null);

  currentActs.forEach((e) => {
    if (e.podium === 0) {
      localStorage.setItem("ponton", e.id);
    } else if (e.podium === 1) {
      localStorage.setItem("club", e.id);
    } else if (e.podium === 2) {
      localStorage.setItem("lake", e.id);
    } else if (e.podium === 3) {
      localStorage.setItem("hangar", e.id);
    }
  });
}

function podiumName(podium) {
  if (podium === 0) {
    return "Ponton";
  } else if (podium === 1) {
    return "Club";
  } else if (podium === 2) {
    return "Lake";
  } else {
    return "Hangar";
  }
}

function fillFutureInfo(futureActs) {
  let futureActsBox = document.getElementById("upcomingActsBox");

  if (futureActsBox) {
    futureActs.forEach((e) => {
      futureActsBox.innerHTML = ""; // Clear previous content
      let p = document.createElement("p");
      p.className = "actName";
      podium = podiumName(e.podium);
      p.innerHTML = podium + " - " + e.name;
      futureActsBox.appendChild(p);
    });
  }

  localStorage.setItem("f_ponton", null);
  localStorage.setItem("f_club", null);
  localStorage.setItem("f_lake", null);
  localStorage.setItem("f_hangar", null);

  futureActs.forEach((e) => {
    if (e.podium === 0) {
      localStorage.setItem("f_ponton", e.id);
    } else if (e.podium === 1) {
      localStorage.setItem("f_club", e.id);
    } else if (e.podium === 2) {
      localStorage.setItem("f_lake", e.id);
    } else if (e.podium === 3) {
      localStorage.setItem("f_hangar", e.id);
    }
  });
}
