function rps(user, computer){
    if(user===computer) return "draw"
    if(user === "rock" && computer == "scissors") return "user";
    if(user === "scissors" && computer == "paper") return "user";
    if(user === "paper" && computer == "rock") return "user";

    return "computer"; 

}

console.log(rps("paper", "scissors"));

