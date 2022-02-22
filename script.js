// create a function called computerPlay that selects randomly between Rock , Paper or Scissors
function computerFunction (){
    var compSelection = ['rock' , 'paper' , 'scissors'];
    var min = 0;
    var max = compSelection.length - 0.00001;
    return compSelection[Math.floor(Math.random()*max)];
}
//declare a function play game which takes inputs computerSelection and playerSelection and check their relationship
//after that it returns 1 of 3 messages. 
//"Its a tie try again!" or "You wont congratulations" or "You lost what a bummer"
//it should tell us who won lost but also return the value the computer inputs
function playGame ( playerSelection,computerSelection ){
    if (playerSelection.toLowerCase() === computerSelection){
        alert(`This one is a tie`)
    } else if ( playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ){
        alert(`You won congratulations!`);
    } else {
        alert(`You lost this one! What a bummer :(`);
    }
    return resaultOfGame = [playerSelection,computerSelection];
}
//we need to declare a variable called playerSelection that contains user input
// var playerSelection = prompt('Let`s play a 5 round game of Rock, Paper, Scissors. Choose what you are going to play. Type rock, paper or scissors: ');

//we need to check if the input is valid and if it is we are going to run the function playGame
// if (!(playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'paper')){
//     alert('Write a valid input or check your spelling please.')
// } else {playGame(playerSelection,computerFunction())};

//we create variable to hold number of computer vs player victories and set their value to 0
//we create a variable called playerSelection that asks a player to input rock paper or scissors
//if input is valid playGame function is called and an array resaultOfGame is returned containing playerSelection and computerSelection
//if the computer won we add 1 to computer victories, if player won we add 1 to player victories
function game(){
    let playerVictories = 0;
    let computerVictories = 0;
    let possibleValues = ['rock','paper','scissors'];
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt('Let`s play a 5 round game of Rock, Paper, Scissors. Choose what you are going to play. Type rock, paper or scissors: ');
        if (!(playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'paper')){
            alert('Please enter a valid input or check your spelling'); i = i - 1;
        } else {playGame(playerSelection,computerFunction())
            if (resaultOfGame[0] === possibleValues[0] && resaultOfGame[1] === possibleValues[2] || resaultOfGame[0] === possibleValues[1] && resaultOfGame[1] === possibleValues[0] || resaultOfGame[0] === possibleValues[2] && resaultOfGame[1] === possibleValues[1]){
                playerVictories = playerVictories + 1;
            } else if (resaultOfGame[0] === possibleValues[2] && resaultOfGame[1] === possibleValues[0] || resaultOfGame[0] === possibleValues[0] && resaultOfGame[1] === possibleValues[1] || resaultOfGame[0] === possibleValues[1] && resaultOfGame[1] === possibleValues[2]) {
                computerVictories = computerVictories + 1;
            }   
            }
    }
    if (playerVictories > computerVictories){
        alert('Good job man! You won!')
    } else if (playerVictories === computerVictories){
        alert('It`s a tie! Wanna go another round? Reload the page.');
    } else {alert('Shit you lost. Wanna play again? Reload the page.')}
}
game();