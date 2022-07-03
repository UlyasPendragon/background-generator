
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// firstNumber = prompt("Please enter your first number");
// secondNumber = prompt("Please enter your second number");
// math = prompt("Do you want to Add + Subtract - Divide / or Multiply *");


// if (math === "+") {
//     math_alert = alert(Number(firstNumber) + Number(secondNumber))  
// } else if(math === "-") {
//     math_alert = alert(Number(firstNumber) - Number(secondNumber)) 
// } else if (math === "*") {
//     math_alert = alert(Number(firstNumber) * Number(secondNumber)) 
// } else {
//     math_alert = alert(Number(firstNumber) / Number(secondNumber)) 
//}

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


// using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"


userAge = prompt("How old are you?")

function carStart(userAge){
    
    if (userAge < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (userAge == 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        console.log("Powering On. Enjoy the ride!");
    } 
} 
carStart(userAge)

