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

//Print even number from 1 to 20


let v= 20;
for(let i=1;i<=20;i++){
   if(i%2==0){
      console.log(i)
   }
}

//Print nu,ber 1 to 15 using while loop



