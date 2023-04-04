const renderWinner = (playerWinner) => {
  return `<div class="box-show-winner"><div class="winnersText"><h1>Congratulations!</h1></h2 class="whoIsWinner">The winner is ${playerWinner}</h2>
  <div class="playAgainBtn">
  <p>Do you want to play again?</p>
  <button id="btnPlayAgain">PLAY AGAIN</button>
  </div>
  </div>
  </div>`;
};

const uiRenderEmpate = (playerWinner) => {
  return `<div class="box-show-winner"><div class="winnersText"><h1>It's a tie!</h1></h2 class="whoIsWinner">If you want to discover the winner try again...</h2>
  <div class="playAgainBtn">
  <p>Do you want to play again?</p>
  <button id="btnPlayAgainEmpate">PLAY AGAIN</button>
  </div>
  </div>
  </div>`;
};

function volverInicio() {
  const btnPlayAgainVolver = document.getElementById("btnPlayAgainEmpate");
  btnPlayAgainVolver.addEventListener("click", () => {
    root.innerHTML = renderIndex();
    renderEvents_gamePage();
    uiBoard();
  });
}

function volverInicio() {
  const btnPlayAgainVolver = document.getElementById("btnPlayAgain");
  btnPlayAgainVolver.addEventListener("click", () => {
    root.innerHTML = renderIndex();
    renderEvents_gamePage();
    uiBoard();
  });
}

const checkWinner = (player, mapC) => {
  const uiRenderWinner = () => {
    if (player == "x") {
      root.innerHTML = renderWinner(game.player2.name);
    } else {
      root.innerHTML = renderWinner(game.player1.name);
    }
  };

  if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
    uiRenderWinner();
  }
  if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
    uiRenderWinner();
  }
  if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
    uiRenderWinner();
  }
  if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
    uiRenderWinner();
  }
  if (
    mapC[0] != undefined &&
    mapC[1] != undefined &&
    mapC[2] != undefined &&
    mapC[3] != undefined &&
    mapC[4] != undefined &&
    mapC[5] != undefined &&
    mapC[6] != undefined &&
    mapC[7] != undefined &&
    mapC[8] != undefined
  ) {
    root.innerHTML = uiRenderEmpate();
  }
};
