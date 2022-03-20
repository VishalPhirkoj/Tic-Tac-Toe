let count = 1;
//let scoreX = 0;
if (localStorage.scoreX) {
  scoreX = localStorage.scoreX;
  document.getElementById("result1").innerHTML = localStorage.scoreX;
} else {
  scoreX = 0;
  document.getElementById("result1").innerHTML = 0;
}
//let scoreO = 0;
if (localStorage.scoreO) {
  scoreO = localStorage.scoreO;
  document.getElementById("result2").innerHTML = localStorage.scoreO;
} else {
  scoreO = 0;
  document.getElementById("result2").innerHTML = scoreO;
}
let currentPlayer = "X";
// let getId = document.querySelectorAll(".cell");

function player(clicked_id) {
  let clickedCell = document.getElementById(clicked_id);
  if (count <= 9) {
    if (clickedCell.innerText == "") {
      console.log(count);
      clickedCell.innerText = currentPlayer == "X" ? "X" : "O";
      console.log(`player ${currentPlayer} played`);
      if (checkWinner()) {
        winnerPlayer(clickedCell.innerText);
      }
      count++;
      if (!checkWinner() && count > 9) {
        console.log("Tie");
        //alert(`Game is Tie`);
        // this is for Game Tie
        document.getElementById("result").innerText = `Game is Tie..!!`;
      }
      currentPlayer = currentPlayer == "X" ? "O" : "X";
      playerTurn(currentPlayer);
      console.log(`Now ${currentPlayer} turn`);
    }
    // checkWinner();
  }
}
function getData(get) {
  let CellData = document.getElementById(get).innerText;
  return CellData;
}

function winnerPlayer(name) {
  if (name == "X") {
    let nameX = document.getElementById("plyaerX").value;
    if (nameX == "") {
      nameX = "X";
    } else {
      NameX = document.getElementById("plyaerX").value;
    }
    document.getElementById("result").innerText = `${nameX} is Winner..!!`;
    showScoreX();
    count = 10;
  } else if (name == "O") {
    let nameO = document.getElementById("plyaerO").value;
    if (nameO == "") {
      nameO = "O";
    } else {
      NameO = document.getElementById("plyaerO").value;
    }
    document.getElementById("result").innerText = `${nameO} is Winner..!!`;
    showScoreO();
    count = 10;
  } else {
    return clicked_id;
  }
}

//checkCondition check values they are same or not.
function checkCondition(c1, c2, c3) {
  if (
    getData(c1) != "" &&
    getData(c2) != "" &&
    getData(c3) != "" &&
    getData(c1) == getData(c2) &&
    getData(c2) == getData(c3) &&
    getData(c3) == getData(c1)
  ) {
    return true;
  }
}

//check all the possibility in the board to get a winner
function checkWinner() {
  if (
    checkCondition("cell1", "cell2", "cell3") ||
    checkCondition("cell4", "cell5", "cell6") ||
    checkCondition("cell7", "cell8", "cell9") ||
    checkCondition("cell1", "cell4", "cell7") ||
    checkCondition("cell2", "cell5", "cell8") ||
    checkCondition("cell3", "cell6", "cell9") ||
    checkCondition("cell1", "cell5", "cell9") ||
    checkCondition("cell3", "cell5", "cell7")
  ) {
    console.log("Winner");
    return true;
    //alert(`${currentPlayer} is winner`);
  }
}

function playerTurn(currPlayer) {
  let getplayer = "";
  let showPlayer = document.getElementById("plyaersturn");
  if (currPlayer == "X") {
    let tempX = document.getElementById("plyaerX").value;
    if (tempX == "") {
      getplayer = "X";
    } else {
      getplayer = tempX;
    }
  } else if (currPlayer == "O") {
    let tempO = document.getElementById("plyaerO").value;
    if (tempO == "") {
      getplayer = "O";
    } else {
      getplayer = tempO;
    }
  } else {
    return getplayer;
  }
  let msgTurn = `Now ${getplayer}'s turn`;
  return (showPlayer.innerText = msgTurn);
}

function ShowMsg() {
  let msg = checkWinner ? "Winner" : "";
  let setMsg = document.getElementById("result");
  setMsg.innerText = msg;
}
function showScoreX() {
  // document.getElementById("scoreXX").innerText = scoreX + 1;
  // scoreX++;
  //localStorage.setItem("X", scoreX);
  if (typeof Storage !== "undefined") {
    if (localStorage.scoreX) {
      localStorage.scoreX = Number(localStorage.scoreX) + 1;
    } else {
      localStorage.scoreX = 1;
    }
    document.getElementById("result1").innerHTML = localStorage.scoreX;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}
function showScoreO() {
  // document.getElementById("scoreOO").innerText = scoreO + 1;
  // scoreO++;
  //localStorage.setItem("O", scoreO);
  if (typeof Storage !== "undefined") {
    if (localStorage.scoreO) {
      localStorage.scoreO = Number(localStorage.scoreO) + 1;
    } else {
      localStorage.scoreO = 1;
    }
    document.getElementById("result2").innerHTML = localStorage.scoreO;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).innerText = "";
    document.getElementById("result").innerText = "";
  }
  count = 1;
}

function newGame() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).innerText = "";
    document.getElementById("result").innerText = "";
  }
  count = 1;
  if (localStorage.scoreO) {
    localStorage.removeItem("scoreO");
    document.getElementById("result2").innerHTML == 0;
  }
  if (localStorage.scoreX) {
    localStorage.removeItem("scoreX");
    document.getElementById("result1").innerHTML == 0;
  }
  location.reload();
}
