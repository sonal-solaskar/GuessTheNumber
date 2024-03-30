const min = 1;
const max = 100;
let answer;
let attempts = 0;


function generateRandomNumber() {
    answer = Math.floor(Math.random()*(max-min+1)+min);
    document.getElementById("guess").textContent = `Guess a number between ${min} and ${max}`;
}

function resetGame() {
    attempts = 0;
    document.getElementById("uguess").value = "";
    document.getElementById("alerts").textContent = "";
    document.getElementById("ans").textContent = "";
    document.getElementById("atmp").textContent = "";
    generateRandomNumber(); // Generate a new random number
}

document.getElementById("reset").onclick = resetGame;

document.getElementById("submit").onclick = function(){
    let user = document.getElementById("uguess").value;
    user = parseInt(user); // Convert input to integer
    let alt = document.getElementById("alerts");
    let ans = document.getElementById("ans");
    let atmp = document.getElementById("atmp");
    alt.textContent = ""; // Clear previous alerts
    if(isNaN(user)){
        alt.textContent = "Please enter a valid number!";
    }
    else if(user < min || user > max){
        alt.textContent = "Please enter a number within the range!";    
    }
    else{
        attempts++;
        if(user < answer){
            alt.textContent = "Try a higher number";
            atmp.textContent = `Attempt Count: ${attempts}`;
        }  
        else if(user > answer) {
            alt.textContent = "Try a lower number";
            atmp.textContent = `Attempt Count: ${attempts}`;
        }
        else{
            alt.textContent = "Congratulations! You Win!";
            ans.textContent = `The Correct Answer is ${answer}!`;
            atmp.textContent = `It took you ${attempts} attempts!`;
        }
    }
}
generateRandomNumber();