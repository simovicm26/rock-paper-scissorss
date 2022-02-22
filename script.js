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
        alert(`It\`s a tie, try again mate! The computer chose ${computerSelection}`)
        return playerSelection,
    } else if ( playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ){
        alert(`You won congratulations! The computer chose ${computerSelection}`);
    } else {
        alert(`You lost! What a bummer :( The computer chose ${computerSelection}`);
    }
}
//we need to declare a variable called playerSelection that contains user input
var playerSelection = prompt('Choose what you are going to play. Type rock, paper or scissors: ');

//we need to check if the input is valid and if it is we are going to run the function playGame
if (!(playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'paper')){
    alert('Write a valid input or check your spelling please.')
} else playGame(playerSelection,computerFunction());

//create a function called game that is going to play a 5 round game of rock paper scissors and display the winner at the end of 5 rounds
//we are going to create a loop that is going to look 5 times through replaying the game