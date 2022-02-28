//select buttons and add them to variables
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
const endOfRoundText = document.querySelector('.end-of-round-text');
const scores = document.querySelectorAll('.score-wrapper p');
const title = document.querySelector('#title');
const restartButton = document.querySelector('.main-container button');
const instructionsToggle = document.querySelector('#instructions-toggle');
const instructionsContent = document.querySelector('.instructions-wrapper');
let playerVictories = 0;
let computerVictories = 0;
let playerSelection;
//add event listeners to buttons
rock.addEventListener('click',function clickEvent(event){
    playerSelection = event.target.className;
    playGame(playerSelection,computerFunction());
});
paper.addEventListener('click',function clickEvent(event){
    playerSelection = event.target.className;
    playGame(playerSelection,computerFunction());
});
scissors.addEventListener('click',function clickEvent(event){
    playerSelection = event.target.className;
    playGame(playerSelection,computerFunction());
});
//restarts the game after it is finished
restartButton.addEventListener('click', function(){
        rock.style.display ='block';
        paper.style.display ='block';
        scissors.style.display ='block';
        title.textContent = 'Choose your weapon';
        restartButton.style.display='none';
        endOfRoundText.textContent = '';
        scores[0].style.color = 'black';
        scores[1].style.color = 'black';
        playerVictories = 0;
        computerVictories = 0;
        scores[0].textContent = '0';
        scores[1].textContent = '0';
})
//toggle instructions on click
instructionsToggle.addEventListener('click',function toggleInstructions(){
    if(instructionsContent.style.display === ''){
    instructionsContent.style.display = 'block';
    document.querySelector('.triangle').style.transform='rotate(180deg)';
    } else {
        instructionsContent.style.display = '';
        document.querySelector('.triangle').style.transform='rotate(90deg)';
    }
});
// create a function called computerPlay that selects randomly between Rock , Paper or Scissors
function computerFunction (){
    var compSelection = ['rock' , 'paper' , 'scissors'];
    var min = 0;
    var max = compSelection.length - 0.00001;
    return compSelection[Math.floor(Math.random()*max)];
}

//declares the winner of the round and adds up the score and displays it
function playGame ( playerSelection,computerSelection ){
    if (playerSelection === computerSelection){
        endOfRoundText.textContent = 'This one is a tie';
    } else if ( playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock' ){
        endOfRoundText.textContent = `You won congratulations!`;
        playerVictories += 1;
        scores[0].textContent = `${computerVictories}`;
        scores[1].textContent = `${playerVictories}`;

    } else {
        endOfRoundText.textContent = `You lost this one! What a bummer :(`;
        computerVictories += 1;
        scores[0].textContent = `${computerVictories}`;
        scores[1].textContent = `${playerVictories}`;
    }
    gameOver(computerVictories,playerVictories);
}

//displays the end winner at the end of 5 rounds
function gameOver (computerVictories,playerVictories){
    if (computerVictories === 5){
        endOfRoundText.textContent = 'Computer is the winner!';
        scores[0].style.color = 'green';
        scores[1].style.color = 'red';
        rock.style.display ='none';
        paper.style.display ='none';
        scissors.style.display ='none';
        title.textContent = 'Press the button to restart:';
        restartButton.style.display='block';
    } else if (playerVictories === 5){
        endOfRoundText.textContent = 'You are the winner!';
        scores[0].style.color = 'red';
        scores[1].style.color = 'green';
        rock.style.display ='none';
        paper.style.display ='none';
        scissors.style.display ='none';
        title.textContent = 'Press the button to restart:';
        restartButton.style.display='block'; 
    } else return;
}