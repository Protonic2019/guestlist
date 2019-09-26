// Import stylesheets
import './style.css';

// Write Javascript code!
var guestList = ["Sander", "Tess", "Martin", "Kim", "Robert", "Kimmie"];

//create a prompt asking guest for name
var Name = prompt("What is your name?");

//check name against guest list
if (guestList.includes(Name)){
  alert("Welcome " + Name + "!");
} else{
  alert("Sorry, " + Name + ", maybe next time!")
}

//if it exists send a welcome alert

//if it doesn't exist send a "sorry, maybe next time"