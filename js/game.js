const renderPlay = () => {
  return `<div class="box-aboutgame">
      <div class="container-ag">
        <div class="text-about-game">
          <h2 class="title-about-game">ABOUT THE GAME</h2>
          <p class="textgame">
            We present you TIC TAC TOE, the game we all know with the same rules
            as always.
          </p>
          <p class="textgame">
            For a better experience we recommend that you enter your or the
            names of the people who will play. We wish you a good game and enjoy
            the adventure!
          </p>
        </div>
      </div>
    </div>
    <div class="board-container">
    <div class="showNames">
        <div class="box-p1-turno">
        <h4 id="showNameP1"></h4>
        <h5 id="turnoP1">Tu turno</h5>
        </div>
        <div class="box-p2-turno">
        <h4 id="showNameP2"></h4>
        <h5 id="turnoP2"></h5>
        </div>
      </div>
      <div id="board">
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
        <div class="box-board"></div>
      </div>
    </div>`;
};
const gameFunction = () => {
  const turnoP1 = document.getElementById("turnoP1");
  const turnoP2 = document.getElementById("turnoP2");
  const htmlCasillas = document.querySelectorAll(".box-board");
  const mapCasillas = [];
  let turno1 = false;
  const manageClick = (element) => {
    console.log(element.innerHTML);
    if (element.innerHTML == "") {
      if (turno1) {
        element.innerHTML = game.player1.mark;
        mapCasillas[element.id] = "x";
        turnoP1.innerHTML = "Es tu turno " + game.player1.name;
        turnoP2.innerHTML = " ";
      } else {
        element.innerHTML = game.player2.mark;
        mapCasillas[element.id] = "o";
        turnoP2.innerHTML = "Es tu turno " + game.player2.name;
        turnoP1.innerHTML = " ";
      }
      turno1 = !turno1;
      checkWinner(mapCasillas[element.id], mapCasillas);
      volverInicio();
    }
  };

  for (let i = 0; i < htmlCasillas.length; i++) {
    htmlCasillas[i].addEventListener("click", (event) => {
      const element = event.target;
      manageClick(element);
    });
    htmlCasillas[i].id = i;
  }
};

// const checkWinner = (player, mapC) => {
//   const uiRenderWinner = () => {
//     if (player == "x") {
//       root.innerHTML = renderWinner(game.player2.name);
//     } else {
//       root.innerHTML = renderWinner(game.player1.name);
//     }
//   };

//   if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
//     uiRenderWinner();
//   }
//   if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
//     uiRenderWinner();
//   }
//   if (
//     mapC[0] != undefined &&
//     mapC[1] != undefined &&
//     mapC[2] != undefined &&
//     mapC[3] != undefined &&
//     mapC[4] != undefined &&
//     mapC[5] != undefined &&
//     mapC[6] != undefined &&
//     mapC[7] != undefined &&
//     mapC[8] != undefined
//   ) {
//     root.innerHTML = uiRenderEmpate();
//   }
// };

const uiBoard = () => {
  const btnStart = document.getElementById("startGame");

  btnStart.addEventListener("click", () => {
    const namePlayer1 = document.getElementById("namePlayer1").value;
    const namePlayer2 = document.getElementById("namePlayer2").value;
    root.innerHTML = renderPlay();
    const showNameP1 = document.getElementById("showNameP1");
    const showNameP2 = document.getElementById("showNameP2");
    game.player1.name = namePlayer1;
    game.player2.name = namePlayer2;
    showNameP1.innerHTML = namePlayer1;
    showNameP2.innerHTML = namePlayer2;
    gameFunction();
  });
};
