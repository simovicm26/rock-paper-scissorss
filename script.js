// create a function called computerPlay that selects randomly between Rock , Paper or Scissors
function computerFunction (){
    var compSelection = ['Rock' , 'Paper' , 'Scissors'];
    var min = 0;
    var max = compSelection.length - 0.00001;
    return compSelection[Math.floor(Math.random()*max)];
}
//declare a function play game which takes inputs computerSelection and playerSelection and check their relationship
//after that it returns 1 of 3 messages. 
//"Its a tie try again!" or "You wont congratulations" or "You lost what a bummer"

//we need to declare a variable called playerSelection that contains user input
var playerSelection = prompt('Choose what you are going to play. Type rock, paper or scissors: ');

//we need to check if the input is valid and if it is we are going to run the function play game
if (!(playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'paper')){
    alert('Write a valid input or check your spelling please.')
} else 