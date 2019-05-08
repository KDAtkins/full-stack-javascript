var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';

var verb = prompt("Enter a verb: " + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt("Enter a noun: " + questionsLeft);
questions -= 1;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt("Enter an adjective: " + questionsLeft);


alert("You're done!");

var story = "There was once a " + noun + " that " + verb + " to a " + adjective + " paradise.";

document.write(story);