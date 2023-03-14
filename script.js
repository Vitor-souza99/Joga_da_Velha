let player = "X";
let cells = document.querySelectorAll(".cell");
let resetButton = document.getElementById("reset-button");

function handleClick(event) {
  let cell = event.target;
  if (cell.textContent !== "") {
    return;
  }
  cell.textContent = player;
  if (checkWinner()) {
    alert(player + " Ganhou!");
    reset();
  } else if (checkTie()) {
    alert("Deu Velha!");
    reset();
  } else {
    player = player === "X" ? "O" : "X";
  }
}

function checkWinner() {
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let combo of combos) {
    if (
      cells[combo[0]].textContent !== "" &&
      cells[combo[0]].textContent === cells[combo[1]].textContent &&
      cells[combo[0]].textContent === cells[combo[2]].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let cell of cells) {
    if (cell.textContent === "") {
      return false;
    }
  }
  return true;
}

function reset() {
  for (let cell of cells) {
    cell.textContent = "";
    cell.style.color = ""; // reset the text color
  }
  player = "X";
}

function handleClick(event) {
    let cell = event.target;
    if (cell.textContent !== "") {
      return;
    }
    cell.textContent = player;
    cell.classList.add(player.toLowerCase());
    if (checkWinner()) {
      alert(player + " Ganhou!");
      reset();
    } else if (checkTie()) {
      alert("Deu Velha!");
      reset();
    } else {
      player = player === "X" ? "O" : "X";
    }
  }
  

for (let cell of cells) {
  cell.addEventListener("click", handleClick);
}

resetButton.addEventListener("click", reset);

// Set the text color for X and O
cells.forEach(cell => {
  if (cell.textContent === "X") {
    cell.style.color = "green";
  } else if (cell.textContent === "O") {
    cell.style.color = "red";
  }
});
