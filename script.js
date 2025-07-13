import { cards } from '/config.js';

const dados = document.querySelector('.dados');
const startGameButton = document.getElementById('startGame');
const playerNameInput = document.getElementById('playerNameInput');
const playerNameDisplay = document.getElementById('playerNameDisplay');
const playerNameDisplay1 = document.getElementById('playerNameDisplay1');
const welcome = document.getElementById('welcome');
const game = document.getElementById('game');
const result = document.getElementById('result');

let playerNameSave = "";
let playerDeck = [];
let computerDeck = [];
let currentPlayerCard = null;
let currentComputerCard = null;
let isPlayerTurn = true;

startGameButton.addEventListener('click', () => {
    dados.style.display = 'flex';
    document.getElementById('container').style.opacity = '0.4';
    startGameButton.setAttribute('disabled', 'true');
});

document.getElementById('closeDados').addEventListener('click', () => {
    dados.style.display = 'none';
    document.getElementById('container').style.opacity = '1';
    startGameButton.removeAttribute('disabled');
});

document.getElementById('joinGame').addEventListener('click', getPlayerName);

function getPlayerName() {
    const name = playerNameInput.value.trim();
    if (name) {
        playerNameSave = name.charAt(0).toUpperCase() + name.slice(1);
        playerNameDisplay.textContent = playerNameSave;
        playerNameDisplay1.textContent = `${playerNameSave} VS Computer`;

        playerNameInput.value = '';
        dados.style.display = 'none';
        document.getElementById('container').style.opacity = '1';
        startGameButton.removeAttribute('disabled');

        game.style.display = 'flex';
        welcome.style.display = 'none';
    } else {
        alert('Please enter a valid name.');
    }
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function distributeCards() {
    const shuffled = shuffle([...cards]);
    playerDeck = shuffled.slice(0, 24);
    computerDeck = shuffled.slice(24);
}

function updateCardDisplay(card, element, isPlayer = true) {
    element.innerHTML = `
        <h3>${isPlayer ? "Your" : "Computer's"} Card - ${card.name}</h3>
        <div class="image-container">
            <img src="${card.image}" class="card-image" alt="${card.name}">
            <p>${card.name}</p>
        </div>
        <div class="attributes">
            <p>Area: <button onclick="playRound('area')" class="btn-round"> ${card.attributes.area} </button> km²</p>
            <p>Population: <button onclick="playRound('population')" class="btn-round"> ${card.attributes.population} </button> people</p>
            <p>Density: <button onclick="playRound('density')" class="btn-round"> ${card.attributes.density} </button> people/km²</p>
            <p>Postcode Areas: <button onclick="playRound('postcodeAreas')" class="btn-round"> ${card.attributes.postcodeAreas} </button></p>
            <p>Rank in UK: <button onclick="playRound('rankUK')" class="btn-round"> ${card.attributes.rankUK} </button> in the UK</p>
        </div>
    `;
}

function showCardCounts() {
    document.querySelector(".player-card h3").innerText = `${playerNameSave} (${playerDeck.length} cards)`;
    document.querySelector(".computer-card h3").innerText = `Computer (${computerDeck.length} cards)`;
}

function setTurnMessage() {
    if (playerDeck.length === 0 || computerDeck.length === 0) return;
    if (isPlayerTurn) {
        result.innerHTML = `<p>Your turn. Choose an attribute.</p>`;
    } else {
        result.innerHTML = `<p>The computer is playing...</p>`;
    }
}

function nextRound() {
    if (playerDeck.length === 0 || computerDeck.length === 0) {
        alert(playerDeck.length === 0 ? "The computer won the game!" : `${playerNameSave} won the game!`);
        location.reload();
        return;
    }

    currentPlayerCard = playerDeck.shift();
    currentComputerCard = computerDeck.shift();

    updateCardDisplay(currentPlayerCard, document.querySelector('.player-card'), true);
    document.querySelector('.computer-card').innerHTML = `
        <h3>Computer's Card</h3>
        <div class="image-container">
            <img src="${currentComputerCard.image}" class="card-image" alt="${currentComputerCard.name}">
            <p>${currentComputerCard.name}</p>
        </div>
        <div class="attributes">
            <p>Area: <span class="attribute-value">${currentComputerCard.attributes.area} km²</span></p>
            <p>Population: <span class="attribute-value">${currentComputerCard.attributes.population} people</span></p>
            <p>Density: <span class="attribute-value">${currentComputerCard.attributes.density} people/km²</span></p>
            <p>Postcode Areas: <span class="attribute-value">${currentComputerCard.attributes.postcodeAreas}</span></p>
            <p>Rank in UK: <span class="attribute-value">${currentComputerCard.attributes.rankUK} in the UK</span></p>
        </div>`;
    
    showCardCounts();
    setTurnMessage();

    if (!isPlayerTurn) {
        simulateComputerMove();
    } else {
        document.querySelectorAll('.btn-round').forEach(btn => btn.disabled = false);
    }
}

function simulateComputerMove() {
    setTimeout(() => {
        const attributes = ['area', 'population', 'density', 'postcodeAreas'];
        const randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];
        playRound(randomAttribute, true);
    }, 2000);
}

window.playRound = function(attribute, isAuto = false) {
    if (!isPlayerTurn && !isAuto) return;

    document.querySelectorAll('.btn-round').forEach(btn => btn.disabled = true);

    const playerValue = currentPlayerCard.attributes[attribute];
    const computerValue = currentComputerCard.attributes[attribute];
    const attributeValues = document.querySelectorAll('.attribute-value');

    attributeValues.forEach(val => val.style.display = 'none');

    let resultText = '';
let nextTurn = 'player';

// Corrigir comparação para rankUK (menor é melhor)
let comparison;
if (attribute === 'rankUK') {
    const playerRank = parseInt(playerValue); // Pega só o número
    const computerRank = parseInt(computerValue);

    if (playerRank < computerRank) {
        comparison = 1;
    } else if (playerRank > computerRank) {
        comparison = -1;
    } else {
        comparison = 0;
    }
} else {
    if (playerValue > computerValue) {
        comparison = 1;
    } else if (playerValue < computerValue) {
        comparison = -1;
    } else {
        comparison = 0;
    }
}

// Resultado baseado na comparação
if (comparison === 1) {
    resultText = `You won the round! (${playerValue} vs ${computerValue})`;
    playerDeck.push(currentPlayerCard, currentComputerCard);
    nextTurn = 'player';
} else if (comparison === -1) {
    resultText = `The computer won the round. (${playerValue} vs ${computerValue})`;
    computerDeck.push(currentPlayerCard, currentComputerCard);
    nextTurn = 'computer';
} else {
    resultText = `It's a tie! (${playerValue} vs ${computerValue})`;
    playerDeck.push(currentPlayerCard);
    computerDeck.push(currentComputerCard);
    nextTurn = isPlayerTurn ? 'player' : 'computer';
}

    result.innerHTML = `<p>${resultText}</p>`;

    setTimeout(() => {
        attributeValues.forEach(val => val.style.display = 'flex');
    }, 1000);

    setTimeout(() => {
        isPlayerTurn = (nextTurn === 'player');
        nextRound();
    }, 3000);
};

document.getElementById('playButton').addEventListener("click", () => {
    distributeCards();
    isPlayerTurn = true;
    nextRound();
});
document.getElementById('exitButton').addEventListener("click", () => {
    location.reload();
});

// Regras - abrir e fechar
const rulesBtn = document.getElementById("rulesButton");
const rulesModal = document.getElementById("rulesModal");
const closeRules = document.getElementById("closeRules");

rulesBtn.addEventListener("click", () => {
    rulesModal.style.display = "flex";
});

closeRules.addEventListener("click", () => {
    rulesModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === rulesModal) {
        rulesModal.style.display = "none";
    }
});


// Inicialização do tsParticles para fundo animado
tsParticles.load("bg-canvas", {
  fpsLimit: 60,
  background: { color: { value: "#1e3c72" } },
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
    links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.5 } },
      push: { quantity: 4 }
    }
  },
  detectRetina: true
});
