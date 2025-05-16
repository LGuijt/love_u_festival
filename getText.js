
faqContainer = document.getElementById("faq-container");
if (localStorage.getItem("lang") == null) {
    localStorage.setItem("lang", "nl");
    lang = "nl";
} else {
    lang = localStorage.getItem("lang");
}

function toggleLang() {
    if (lang == "nl") {
        localStorage.setItem("lang", "en");
        lang = "en";
        getText();
    } else {
        localStorage.setItem("lang", "nl");
        lang = "nl";
        getText();
    }
}




async function getParent(id) {
    const res = await fetch("functions/getParent.php?id=" + id + "&lang=" + lang, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    
});
    const data = await res.json();
    
    newData = data.parent

    return newData;
}

async function getText() {
    data = await getParent(3);

    let titel = document.createElement("h1");
    titel.innerHTML = data.text;
    
    titel.className = "faq-title";
    faqContainer.appendChild(titel);

    let children = data.child_ids;
    console.log(children);

    for (let i = 0; i < children.length; i++) {
        createAccordion(children[i]);
    }
}


async function createAccordion(id) {
    data = await getParent(id);
    console.log(data);
    let accordionButton = document.createElement("button");
    accordionButton.className = "accordion";
    accordionButton.innerHTML = data.text;
    faqContainer.appendChild(accordionButton);

    let accordionContent = document.createElement("div");
    accordionContent.className = "panel";
    let child;
    
    if (id == 4){
        for (let i = 0; i < data.child_ids.length; i++) {
            console.log(data.child_ids[i]);
            child = addContent(data.child_ids[i]);
        }
    }
}

async function addContent(id) {
    console.log(id);
    data = await getParent(id);

    console.log(data);
}

getText();