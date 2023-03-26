const root = document.getElementById("root");

const game = {
  player1: {
    name: null,
    mark: "X",
  },
  player2: {
    name: null,
    mark: "O",
  }
};

const renderIndex = () => {
  return `<div class="main-container">
    <div class="box-aboutgame">
      <div class="container-gi">
        <div class="text-game-instructions">
          <h2 class="title-game-instructions">GAME MODES</h2>
          <p class="textgame">
            In this mode you will be competing against your friends, we
            recommend that you put the names of each one before starting the
            game.
          </p>
          <p class="textgame">
            if you compete against the cpu the game will be the same, but the
            difficulty could increase... good luck!
          </p>
        </div>
      </div>
    </div>
    <div class="main-logo">
      <img
        src="images/TICTACTOELOGO.png"
        class="img-logo"
        alt="logo tic tac toe"
      />
    </div>
    <div class="box-aboutgame">
      <div class="container-ag">
        <div class="text-about-game">
          <h2 class="title-about-game">ABOUT THE GAME</h2>
          <p class="textgame">
            We present you TIC TAC TOE, the game we all know with the same
            rules as always.
          </p>
          <p class="textgame">
            For a better experience we recommend that you enter your or the
            names of the people who will play. We wish you a good game and
            enjoy the adventure!
          </p>
          <button type="button" id="button-playnow"
            >PLAY NOW</button>
        </div>
      </div>
    </div>
    </div>`;
};


root.innerHTML = renderIndex();
