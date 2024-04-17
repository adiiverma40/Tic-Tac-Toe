let box = document.querySelectorAll(".box");
let reset = document.querySelector(".resetBtn");
let term = document.querySelector(".term");
let newGame = document.querySelector(".newGame");
let winner = document.querySelector(".winner");
let text = document.querySelector(".text");
let turnO = true; //playerX playerO
//winning pattern



const newGamefn = () =>{
    winner.style.zIndex = -1;
    box.forEach((x) => {
      x.innerText = "";
      turnO = true;
      console.log(turnO);
      x.disabled = false;
    });
  
}
newGame.addEventListener("click", newGamefn);
const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

box.forEach((x) => {
  x.addEventListener("click", () => {
    if (turnO === true) {
      x.innerText = "O";
      term.innerText = 'Its "X" Term';
      turnO = false;
      console.log(turnO);
    } else if (turnO == false) {
      x.innerText = "X";
      term.innerText = 'Its "O" Term';
      turnO = true;
      console.log(turnO);
    }
  x.disabled = true;
  checkWinner();
  });
});

reset.addEventListener("click", () => {
  box.forEach((x) => {
    x.innerText = "";
    turnO = true;
    console.log(turnO);
    x.disabled = false;
  });
});

reset.addEventListener("click", function () {
  // Add the 'clicked' class to apply the click effect
  this.classList.add("clicked");

  // Remove the 'clicked' class after a short delay to reset the effect
  setTimeout(() => {
    this.classList.remove("clicked");
  }, 300); // 300 milliseconds
});

const checkWinner = ()=>{
    for(let pattern of patterns){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                winner.style.zIndex = 1;
                text.innerText = `The Winner Is ${pos1}`;
            }
        }
    }

}
