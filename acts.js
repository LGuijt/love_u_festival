const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
let main = document.getElementById('acts');

console.log(id);

if (localStorage.getItem('lang') == null) {
    localStorage.setItem('lang', 'nl');
    lang = 'nl';
}
else {
    lang = localStorage.getItem('lang');
}

console.log(lang);

async function getAct() {
    const res = await fetch('functions/getAct.php?id=' + id + '&lang=' + lang, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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


async function makeAct() {
    const data = await getAct();
    console.log(data);
    img = document.createElement('img');
    img.src = 'assets/img/acts/' + data.img;
    main.appendChild(img);

    let name = document.createElement('h1');
    name.innerHTML = data.name;
    main.appendChild(name);

    if (data.podium == 0) {
        podium = 'Poton';
    } else if (data.podium == 1) {
        podium = 'Club';
    } else if (data.podium == 2) {
        podium = "Lake";
    } else if (data.podium == 3) {
        podium = "Hangar";
    }

   if (data.day == 0) {
    if (lang == 'nl') {
        day = 'Zaterdag';
    } else if (lang == 'en') {
        day = 'Saturday';
    }
    } else if (data.day == 1) {
        if (lang == 'nl') {
            day = 'Zondag';
        } else if (lang == 'en') {
            day = 'Sunday';
        }
    }

    start = formatTime(data.start_time);
    end = formatTime(data.end_time);

    let smallInfo = document.createElement('div');
    smallInfo.className = 'small-info';
    smallInfo.innerHTML = podium + ' | ' + day + ' | ' + start + ' - ' + end;
    main.appendChild(smallInfo);


    let description = document.createElement('p');
    description.innerHTML = data.description;
    main.appendChild(description);

    let video = document.createElement('iframe');
    video.src = data.video;
    // video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;
    main.appendChild(video);
}

makeAct();



function formatTime(number) {
    // Zorg ervoor dat het getal 4 cijfers heeft (bv. 930 -> "0930")
    const str = number.toString().padStart(4, '0');
  
    // Eerste 2 cijfers = uren, laatste 2 = minuten
    const hours = str.substring(0, 2);
    const minutes = str.substring(2, 4);
  
    return `${hours}:${minutes}`;
  }
  
