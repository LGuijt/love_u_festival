faqContainer = document.getElementById("faq-container");

if (localStorage.getItem("lang") == null) {
  localStorage.setItem("lang", "nl");
  lang = "nl";
} else {
  lang = localStorage.getItem("lang");
}

function toggleLang() {
  if (lang == "nl") {
    console.log("Switching to English");
    localStorage.setItem("lang", "en");
    lang = "en";
    document.getElementById("nlFlag").style.display = "none";
    document.getElementById("enFlag").style.display = "block";
    getText();
  } else {
    console.log("Switching to Dutch");
    localStorage.setItem("lang", "nl");
    document.getElementById("nlFlag").style.display = "block";
    document.getElementById("enFlag").style.display = "none";
    lang = "nl";
    getText();
  }
}

async function getParent(id) {
  const res = await fetch(
    "functions/getParent.php?id=" + id + "&lang=" + lang,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  if (!data.parent) {
    return null;
  }

  newData = data.parent;

  return newData;
}

async function getChild(id) {
  const res = await fetch("functions/getData.php?id=" + id + "&lang=" + lang, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  newData = data.data;

  return newData;
}

async function getText() {
  faqContainer.innerHTML = ""; // Leegmaken bij opnieuw laden
  const data = await getParent(3);

  let titel = document.createElement("h1");
  titel.innerHTML = data.text;
  titel.className = "faq-title";
  faqContainer.appendChild(titel);

  const children = data.child_ids || [];

  for (const id of children) {
    await createAccordion(id); // wacht tot elke accordion is aangemaakt
  }
  accordionBuilder();
}

async function createAccordion(id) {
  let data = await getParent(id);

  let accordionContainer = document.createElement("div");
  accordionContainer.className = "accordion-container";

  let accordionButton = document.createElement("button");
  accordionButton.className = "accordion";
  accordionButton.innerHTML = data.text;
  //   faqContainer.appendChild(accordionButton);
  accordionContainer.appendChild(accordionButton);

  let accordionContent = document.createElement("div");
  accordionContent.className = "panel";

  // Controleer hier eerst of child_ids bestaat
  if (!data?.child_ids || !Array.isArray(data.child_ids)) {
    faqContainer.appendChild(accordionContent);
    return;
  }

  let amount = data.child_ids.length;
  const visited = new Set(); // ⬅️ één per accordion
  for (let i = 0; i < amount; i++) {
    const newChild = await addContent(data.child_ids[i], visited);
    accordionContent.appendChild(newChild);
  }

  accordionContainer.appendChild(accordionContent);
  faqContainer.appendChild(accordionContainer);
  //   faqContainer.appendChild(accordionContent);
}

async function addContent(id, visited = new Set()) {
  // ⛔ voorkomen dat we in een lus terechtkomen
  if (visited.has(id)) {
    return document.createTextNode(""); // niets toevoegen
  }
  visited.add(id);

  let newDiv = document.createElement("div");
  let data = await getParent(id);

  if (!data) {
    data = await getChild(id);
    let newP = document.createElement("p");
    newP.innerHTML = data.text;
    newDiv.appendChild(newP);
  } else {
    // Daarna de huidige tekst zelf
    let newP;
    if (data.type == "3") {
      newP = document.createElement("h4");
    } else {
      newP = document.createElement("p");
    }
    newP.innerHTML = data.text;
    newDiv.appendChild(newP);

    // Eerst alle kinderen toevoegen (dieper eerst)
    const children = data.child_ids || [];
    for (let i = 0; i < children.length; i++) {
      const newChild = await addContent(children[i], visited);
      newDiv.appendChild(newChild);
    }
  }

  return newDiv;
}

getText();
