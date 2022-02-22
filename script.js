// create a function called computerPlay that selects randomly between Rock , Paper or Scissors
function computerFunction (){
    var compSelection = ['Rock' , 'Paper' , 'Scissors'];
    var min = 0;
    var max = compSelection.length - 0.00001;
    return compSelection[Math.floor(Math.random()*max)];
}
