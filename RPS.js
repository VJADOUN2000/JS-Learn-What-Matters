//Rock-paper-scissor Logic

// function rps(user,computer){
//    if(user===computer) return "Draws"

//    if(user=="rock" && computer==="scissor") return "User Wins"
//    if(user=="paper" && computer==="rock") return "User Wins"
//    if(user=="scissor" && computer==="paper") return "User Wins"

//    return "Computer Wins"
// }

// //let player = prompt("Enter the your gesture [Player 1]");
// //let player2 = prompt("Enter the your gesture  [Player 2]");
// //console.log(rps(player,player2));


// //-------------------------Loops----------------------------------->

// //repear karne ko loop kahte hai

// //for loop

// let num =10;
// for(let i=0;i<num;i++){
//     console.log(i);
// }

// //Print even number from 1 to 20


// let v= 20;
// for(let i=1;i<=20;i++){
//    if(i%2==0){
//       console.log(i)
//    }
// }

// //Print number 1 to 15 using while loop

// // Q5.  Multiplication of table 5

// let c =5
// for(let i=1;i<=10;i++){
//     console.log(`5 X ${i} =  ${i*c}`)
// }

// //Q6. sum of Numbers from 1 to 100

// let i = 1;

// let sum =0;

// while(i<=100){
//     sum+= i;
//     i++;
// }
// console.log(sum);

// //Q7. Print numbers betwwen 1 to 50 which are divisible by 3

// let a= 50;
 
// for (let i=1;i<=50;i++){
//     if(i%3==0){
//         console.log(i);
//     }
// }

// Q8. ask number from user and check whether it is odd or even

// let user = prompt("Enter the number");

// for(let i=1;i<=user;i++)
// if(i%2===0){
//     console.log(`${i} is Even`);
// }

// else{
//     console.log(`${i} is Odd`)
// }

//9 how many number betwwen 1 to 100 are divisble by 3 and 5

// let num1 = 100;

// for(let i =1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }

/*======================Better version====================================== */
//Q1 print number till it finds the first number divisible by 7

// for(let i=1;i<=100;i++){
//     if(i%13==0){
//         break;
//     }
//     console.log(i);
// }

// Q2. print number from 1 to 20 and skip number which are mutliple of 3

// for(let i=1;i<=20;i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }

// // Q3. Print first 5 odd number only

// let counter =0;
// for(let i=1;i<=100;i++){
//     if(i%2!==0){
//         console.log(i)
//         counter++;
//     }
//     if(counter>4)  break;
// }


// To check how many digit in a number

// isme hum use karte hai 10 division concept


let num=75485;
let count=0;
while(num >0){
    num =Math.floor(num/10);
    count++;
}
console.log(count)

// starting of Function 

//what is function & what is function

 // functions are block of reusable logic in a code

function fun(){  ///===============> Function declearation
    console.log("Happy New Year 2026")
}

let num1 = function () { //===============> function expression
    console.log("heyheyhey")
}

num1();

// fat Arrow Functions

let num2 =()=>{   //============> function

}