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

// =======================starting of Function =========================================>

//what is function & what is function

 // functions are block of reusable logic in a code

function fun(){  ///===============> Function declaration
    console.log("Happy New Year 2026")
}

let num1 = function () { //===============> function expression
    console.log("heyheyhey")
}

num1();

// fat Arrow Functions

let num2 =()=>{   //============> function

}


//===============================================

function dance(Name){
    console.log(`${Name} naach raha hai`)
}

dance("gaada");
dance("ghoda");
dance("chuha");
dance("bille");

function multi(a,b,c){ //=============> perameter
    console.log(a*b*c)
}

multi(45,89,75);  //===> arguments

//=========================> 
    // Default, rest and spread parameters

function cd(q=0,e=0){   //====>  default parameters
    console.log(q+e);
}

cd();

// rest 
function fdfd(...gdfd){
 console.log(gdfd)
}

fdfd(4,4,5,6,3,2,1);

// returm & and early return

//Matlab jaha se aaye hu wahi daal denge 

function fgh(){
    return 45; 
}

 let val = fgh();


 // first class function

 //=> function ko values ki tara treat kar sakte hai

 // revison => FCS is like treating function as a real value


 function f1(val){
    val();
 }

f1(function(){
    console.log(123);
});


// higher order function

//hof wo function hote hai jo ki return kare function ys fir accept kare function


function abc(par){   // ==>  Higher order function
    par();
}

abc(function(){
    console.log("78");
})


///or

function ABC(){
    return function(){
        console.log("456");
    }
}

ABC()();


//============ pure vs impure function


// asia function jo ki baahar ki value ko naa badle wo pure function hai

//Example of pure function

let a =45;

 function dsd(){
    console.log(a);
 }


 function hui(){
     a++;
 }

// asia function jo baahar ki value badal de wo impure function hai


//Concept Closures and Lexical scoping

// closures --> ek function  jo return kare ek aur function aur return hone waala function humesha youse karega parent function ka koi variable

function dsda(){
    let kj=45;
    return function(){
        console.log(kj);
    }
}

dsda()();
// lexical scoping --> Inner functiuon can access outer function, but outer function cannot access inner function variable 


function lex(){
    let a=45;
    function xel(){
        let b= 85;
    }
    console.log(b);
}


//======================IIFE (Immediately Involed Function Expression)==>

    (function(){

    })();

// ====================Hoisting difference between  declaration and expression====/

abcddsd();

function abcddsd(){
    console.log("Vikrant Singh")
}


/// => cannot Hoist while using variable to store a function and then call it before creating it

////===============================Pactice Question=========================================>

//Q1. What's the difference between function declaration and expression in terms of hoisting?

//Answer

//   asdsd();

// let asdsd =function (){
//     console.log("dsdsdsd")
// }

// 3. Conver below function in arrow func.

// function multiply(a,b){
//     return a*b;
// }

// let arrow = (a,b)=>{
//     return (a*b);
// }

// console.log(arrow(45,10))

//4. identify what is argument and parameters

function greet(name){  ///===========parameters
    console.log(name)
}

greet ("Vikrant");  // ============Arguments

//5. how many arguments & parameters

function demo (a,b,c){}  // ========3 parameters

demo (54,75);   ///  ======= 2 arguments


//5. simple function guessing the output if no argument is given ==> Solution is default value is used if not argument is passed



///7. what (...) in function

function spd(a,g,b,...rest){
    console.log(a,g,b,rest)
}

spd(4,8,65,45,12,87,5,654,55,45,4,5,54,5,5,4);



//8. Use Rest Operato to accept any number of scores and return the total.

function getScore(...scores){
    let total=0;
    scores.forEach(function(values){
        total += values;
    });
     return total;
}

console.log(getScore(45,78,45,65));


//9  using early reurn to make it short and simple

function Checkage(age){
    if(age<18) return "Too Young";
    return "allowed";
}

console.log(Checkage(17));

//10. what is this function return like empty ====> Undefined

function f(){
    return ;
}

console.log(f());


// 11. whHAT IS MEAN BY FIRST CLASS FUNCTION 

//aNSWER ===> fUNCTION WHICH IS TREATED AS REAL VALUES 



//12. ASSIGN FUNCTION TO A VARIABLE AND THEN CALL IT

let val1 = function(){
    console.log("Function assigned to variable");
}

val1();

//13. Pass a function into anothher function and execute it

let ds = function f1(val){
    val();
}

f1(function(){
    console.log("Function 2")
})

console.log(ds);

//14. what is higher order function

//Answer function which either accept function as parameters and return function


//example

function HOF(){   /// ============HOF
    return function(){
        console.log("Testing")
    }
}


//15. Check which is HOF

[1,2,3].map(function(x){  // ==================> map is higher order function
    return x*2
});

// 16. simple check if the function is pure or impure

//17. And Now conver impure to pure

let total =0;
function getTotal(val){
    let newtotal= total;
    newtotal+= val;
}


//18 what is closure ?When it is created? 

// function cls(){
//     let val2 =45;
//     return function(){
//         console.log(val2);
//     }
// }

// console.log(cls())

//19. Check the Output of Function

function outer(){
    let count =0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter = outer();

counter();
counter();



//20 Convert function into IIFE

(function init(){
    console.log("Initialized");
})();

//21 what is use of IIFE function?Name one real world use case

const counter1 = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    }
  };
})();

counter1.increment(); // 1
counter1.increment(); // 2


//22 what will be ouput here and why?

// greet1();

// let greet1 = function(){
//     console.log("Hoisting in function expression");
// }                               //    ==============> cannot access greet1


//===================But in this example below=================>

greet2();

function greet2(){
    console.log("Hoisting in Function statement");
}

//***************************PRACTICE TASK******************************************* */

// Write BMI Calculator

let result= function BMI(weight, height){
    return weight/ (height*height)
}

console.log(result(65,1.8).toFixed(4));

