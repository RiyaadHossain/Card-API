const mainDiv = document.getElementById("card-container");
const cardInput = document.getElementById("card-input");
const errorMsg = document.getElementById("error-msg");
const favCard = () => {
  const cardValue = parseInt(cardInput.value);
  if (isNaN(cardValue) || cardValue < 1 || cardValue == '') {
    mainDiv.textContent = "";
    errorMsg.innerHTML = `😪 Please Input a valid Number not <span class="text-warning"> "${cardInput.value}"</span>`;
    cardInput.value = "";
  } else if (cardValue > 52) {
    errorMsg.textContent = "";
    mainDiv.textContent = "";
    errorMsg.innerHTML = `🤐 Please Input equal or smaller number than <span class="text-success">"52"</span>`;
    cardInput.value = "";
  } else {
    mainDiv.textContent = "";
    errorMsg.textContent = "";
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${cardInput.value}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => printCard(json.cards));
    cardInput.value = "";
  }
};

const printCard = (cards) => {
  cards.forEach((element) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-4";
    cardDiv.className = "mb-3";
    cardDiv.innerHTML = `
        <div class="col rounded-3 border border-3 border-dark">
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${element.code}</h3>
                    <p class="card-text"> ${element.suit} - ${element.value}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">See Details</button>
                </div>
                <!-- Modal -->
                <div class="modal fade text-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">${element.code}</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <img src="${element.image}" alt="">
                    <h5 class="mt-3">${element.suit} ~ ${element.value}</h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
    mainDiv.appendChild(cardDiv);
  });
};
