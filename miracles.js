let miracles = [];
let visibleMiracles = 0;
let batchSize = 6;

async function loadMiracles() {
    const response = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');

    if (!response.ok) {
        // HTTP-level error (e.g. 404, 500)
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    miracles = await response.json();

    renderMiracles();
}

function renderMiracles(){
    // main is the container / cardset of all cards
    const cardset = document.getElementById('grid-cards');
    const nextBatch = miracles.slice(visibleMiracles, visibleMiracles+batchSize);
    nextBatch.forEach(miracle => {
        const card = createElement(miracle);
        cardset.appendChild(card);
    })
    visibleMiracles += batchSize;

}

    function createElement(miracledata) {
        const newcard = document.createElement("div");
        newcard.classList.add("card");

        newcard.innerHTML = `
        <h1>${miracledata.title}</h1>
        <h2>${miracledata.location}, ${miracledata.year}.</h2>
        <p>${miracledata.summary}</p>
        <button>Learn More</button>`;

        const button = newcard.querySelector("button");
        button.addEventListener('click', () => showInfo(miracledata, newcard))

        return newcard;
    }

    function showInfo(data, cardElement) {
        const button = cardElement.querySelector("button");
        const detailedCard = cardElement.querySelector(".details");

        if (detailedCard) {
            detailedCard.remove();
            button.textContent = "Learn More";
        } else{
            const details = document.createElement("div");
            details.classList.add("details");
            details.innerHTML = `
                <p>${data.category}</p>
                <p>${data.details}</p>
            `;
            cardElement.insertBefore(details, button);
            button.textContent = "Close";

        }
    }

const loadMoreBtn = document.createElement("button");
loadMoreBtn.classList.add('loadMoreBtn');
loadMoreBtn.textContent = 'Load more';
loadMoreBtn.addEventListener('click', renderMiracles);
document.getElementById("loadMoreBtn-container").appendChild(loadMoreBtn);

loadMiracles();