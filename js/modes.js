const renderSelectMode = () => {
  return `<div class="box-aboutgame">
      <div class="container-gi">
        <div class="text-game-instructions">
          <h2 class="title-game-instructions">GAME MODES</h2>
          <p class="textgame">Player vs Player</p>
          <p class="textgame">
            In this mode you will be competing against your friends, we
            recommend that you put the names of each one before starting the
            game.
          </p>
          <p class="textgame">Player vs CPU</p>
          <p class="textgame">
            if you compete against the cpu the game will be the same, but the
            difficulty could increase... good luck!
          </p>
        </div>
      </div>
    </div>
    <div class="box-select-mode">
      <div class="select-mode">
        <h2>SELECT A MODE</h2>
        <div class="mode-options">
          <div class="two-options">
            <button class="mode1vs1" id="btn-vs-player">
              <img src="images/boy.png" class="boy-img" alt="" />
              <p class="mode-text">vs</p>
              <img src="images/girl.png" class="girl-img" alt="" />
            </button>
          </div>
          <button class="mode1vscpu" id="btn-vs-cpu">
            <img src="images/boy.png" class="boy-img" alt="" />
            <p class="mode-text">vs</p>
            <img src="images/robot.png" class="robot-img" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="box-names">
        <div class="box-inputs-names">
          <div class="input-names">
            <div>
              <h2>INTRODUCE YOUR NAME</h2>
              <input
                type="name"
                id="namePlayer1"
                placeholder="              Player 1"
              />
              <input
                type="name"
                id="namePlayer2"
                placeholder="              Player 2"
              />
            </div>
            <div class="boton-start">
              <button id="startGame">Start</button>
            </div>
          </div>
        </div>
      </div>`;
};
const renderEvents_gamePage = () => {
  const buttonPlay = document.getElementById("button-playnow");
  buttonPlay.addEventListener("click", () => {
    root.innerHTML = renderSelectMode();
    const uiRemoveCpuInput = () => {
      const btnVsCpu = document.getElementById("btn-vs-cpu");
      btnVsCpu.addEventListener("click", () => {
        const inputNamePlayer = document.getElementById("namePlayer2");
        inputNamePlayer.style.display = "none";
      });
      uiBoard();
    };

    uiRemoveCpuInput();
  });
};

renderEvents_gamePage();

const btnVsPlayer = document.getElementById("btn-vs-player");
