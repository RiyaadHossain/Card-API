const cardInput = document.getElementById('card-input')
const favCard = () => {
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${cardInput.value}`
    fetch(url)
    .then(response => response.json())
    .then(json => printCard(json.cards))
}

const mainDiv = document.getElementById('card-container')
const printCard = cards => {
    cards.forEach(element => {
        console.log(element)
        const cardDiv = document.createElement('div')
        cardDiv.className = 'col-4'
        cardDiv.className = 'mb-3'
        cardDiv.innerHTML = `
        <div class="col rounded-3 border border-3 border-dark">
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${element.code}</h3>
                    <p class="card-text"> ${element.suit} - ${element.value}</p>
                    <a href="#" class="btn btn-primary">See Details</a>
                </div>
            </div>
        </div>
        `
        mainDiv.appendChild(cardDiv)
    });
}