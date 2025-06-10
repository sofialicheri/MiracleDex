async function loadMiracles() {
    const response = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');

    if (!response.ok) {
        // HTTP-level error (e.g. 404, 500)
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    renderMiracles(data);
}

function renderMiracles(dataset){
    // main is the container / cardset of all cards
    const cardset = document.getElementById('grid-cards');
    dataset.forEach(miracle => {
        const card = createElement(miracle);
        cardset.appendChild(card);
    })
}

    function createElement(miracledata) {
        const newcard = document.createElement("div");
        newcard.classList.add("card");

        newcard.innerHTML = `
        <h1>${miracledata.title}</h1>
        <h2>${miracledata.location}, ${miracledata.year}.</h2>
        <p>${miracledata.summary}</p>
        <button>Learn More</button>`;

        return newcard;
    }

loadMiracles();