//Rock-paper-scissor Logic

function rps(user,computer){
   if(user===computer) return "Draws"

   if(user=="rock" && computer==="scissor") return "User Wins"
   if(user=="paper" && computer==="rock") return "User Wins"
   if(user=="scissor" && computer==="paper") return "User Wins"

   return "Computer Wins"
}

//let player = prompt("Enter the your gesture [Player 1]");
//let player2 = prompt("Enter the your gesture  [Player 2]");
//console.log(rps(player,player2));


//-------------------------Loops----------------------------------->

//repear karne ko loop kahte hai

//for loop

let num =10;
for(let i=0;i<num;i++){
    console.log(i);
}