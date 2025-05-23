const lines = document.getElementById("lines");
const sunLines = document.getElementById("sunLines");
let satPoton = document.getElementById("satPoton");
let satClub = document.getElementById("satClub");
let satLake = document.getElementById("satLake");
let satHangar = document.getElementById("satHangar");
let sunPoton = document.getElementById("sunPoton");
let sunClub = document.getElementById("sunClub");
let sunLake = document.getElementById("sunLake");
let sunHangar = document.getElementById("sunHangar");

for (let i = 0; i < 58; i++) {
  const line = document.createElement("div");
  line.className = "line";
  lines.appendChild(line);
  sunLines.appendChild(line.cloneNode(true));
}

if (localStorage.getItem("lang") == null) {
  localStorage.setItem("lang", "nl");
  lang = "nl";
} else {
  lang = localStorage.getItem("lang");
}

async function getSchedule() {
  const res = await fetch("functions/getSchedule.php?lang=" + lang, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  console.log(data);

  if (data.data) {
    newData = data.data;
  } else {
    newData = null;
  }

  return newData;
}

async function makeSchedule() {
  const data = await getSchedule();
  data.forEach((e) => {
      let block = document.createElement("div");
      block.className = "line-up-item";
      block.innerHTML = e.name;
      let start = e.start_time;

      start = start - 1000;

      start = calculateStart(start);

      end = calculateEnd(e.start_time, e.end_time);

      block.style.gridColumn = start + " / span " + end;

      if (e.day == 0) {
      if (e.podium == 0){
        satPoton.appendChild(block);
      } else if (e.podium == 1) {
        satClub.appendChild(block);
      } else if (e.podium == 2) {
        satLake.appendChild(block);
      }
      else if (e.podium == 3) {
        satHangar.appendChild(block);
      }
    } else if (e.day == 1) {
        if (e.podium == 0){
            sunPoton.appendChild(block);
        } else if (e.podium == 1) {
            sunClub.appendChild(block);
        } else if (e.podium == 2) {
            sunLake.appendChild(block);
        }
        else if (e.podium == 3) {
            sunHangar.appendChild(block);
        }
        }
  });
}

makeSchedule();

function calculateStart(start) {
    if (start == 0){
        gridLine = 1;
    } else if (start == 30){
        gridLine = 3;
    } else if (start == 100){
        gridLine = 5;
    } else if (start == 130){
        gridLine = 7;
    } else if (start == 215){
        gridLine = 10;
    } else if (start == 230){
        gridLine = 11;
    } else if (start == 330){
        gridLine = 15;
    } else if (start == 345){
        gridLine = 16;
    } else if (start == 400){
        gridLine = 17;
    } else if (start == 430){
        gridLine = 19;
    } else if (start == 515){
        gridLine = 22;
    } else if (start == 530){
        gridLine = 23;
    } else if (start == 700){
        gridLine = 29;
    } else if (start == 730){
        gridLine = 31;
    } else if (start == 915){
        gridLine = 38;
    } else if (start == 930){
        gridLine = 39;
    } else if (start == 1015){
        gridLine = 42;
    } else if (start == 1130){
        gridLine = 47;
    } else if (start == 1200){
        gridLine = 49;
    }
    return gridLine;
}

function calculateEnd(start, end) {
    diff = end - start;

    console.log(diff);

    if (diff == 85){
        res = 3;
    }
    else if (diff == 100){
        res = 4;
    } else if (diff == 130){
        res = 6;
    } else if (diff == 170){
        res = 6;
    } else if (diff == 200){
        res = 8;
    } else if (diff == 270){
        res = 10;
    }

    return res;
}

function openTab(evt, day) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(day).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("satButton").click();