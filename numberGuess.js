function guessNumber() {
    let Number = 5;
    let enter = prompt("Guess a Number between 1 and 10: ");
    while (enter != Number){
        if (enter < Number){
            alert("Too low")
        } else {
            alert("Too High")
        }
        enter = prompt("Guess a Number between 1 and 10: ");
    }
    alert("Correct!");
}