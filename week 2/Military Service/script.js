const age = prompt("How old are you?");

if (age < 18) {
    console.log(alert("Too young"));
} else if (age < 27) {
    console.log(alert("Right age for military service"));
} else if (age < 41) {
    console.log(alert("You are in reserve"));
} else  if (age < 55) {
    console.log(alert("You are in backup reserve"));
} else {
    console.log(alert("You are too old!"));
}