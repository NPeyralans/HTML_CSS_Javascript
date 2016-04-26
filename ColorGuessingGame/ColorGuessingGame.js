var colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'white', 'grey', 'lightgrey', 'lightblue'];
var colors = colors.sort();
var guess_input;
var count = 0;
var finished = false;
var random_number = Math.random() * colors.length;
var target_index = Math.floor(random_number);
alert("target_index is equal to : " + target_index);
var target = colors[target_index];
alert("target is equal to : " + target);

function do_game() {

        while(!finished) {
                guess_input = prompt("I am thinking of one of these colors : \n\n" + colors.join(", ") + "\n\nCan you guess what color it is?");
                console.log(guess_input);
                if (guess_input == null){
                        alert("I'm sorry you don't want to play!");
                        break;
                }
                count += 1;
                finished = check_guess();
        }
}
function check_guess() {
        if (((guess_input) < colors[0]) | (guess_input > colors[colors.length-1])) {
                alert("Please enter an appropriate color");
                return false;
        }
        if (guess_input > target) {
                alert("Your guess is alphabetically higher that the color I am thinking of.");
                return false;
        }
        if ( guess_input < target ) {
                alert("Your guess is alphabetically lower than the color I am thinking of.");
                return false;
        }
        alert("You got it!" + " \n\nIt took you " + count + " guesses");
        document.write("YOU WON!!");
        myBody=document.getElementsByTagName("body")[0];
        myBody.style.background=target;
        return true
}
