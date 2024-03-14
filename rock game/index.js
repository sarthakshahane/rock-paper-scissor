let boxes = document.querySelectorAll(".box");
let text = document.querySelector(".para");
let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");
let play= document.querySelector(".play");


const getCompChoice = () => {
    const list = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
 
    return list[randIdx];

}

const drawGame=()=>{
    text.innerText=" Game Draw , Play Again !!";
    text.style.backgroundColor="#81968F"
    play.style.borderRadius='9px ';

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      text.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      text.style.backgroundColor = "green";
      play.style.borderradius = "9px";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      text.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      text.style.backgroundColor = "red";
      play.style.borderradius = "9px";
    }
    console.log(compChoice);
  };
const gameStart = (userChoice) => {
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if( userChoice === "paper"){
            userWin = compChoice === "scissor" ?  false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin,userChoice,compChoice);
       
    }

};





boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        console.log(userChoice);
       
        
gameStart(userChoice);
    });

});

