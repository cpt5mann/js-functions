/*
* A function is a block of code (a series of instructions) designed to execute a certain task. Functions allow you to reuse code.
 
* i.e. A function to generate a greeting to specific person you designate:*/

// Step One: Define the function.
function greeting(guest){ // takes in a parameter named 'guest' which acts like a local variable inside the function
 return "Good afternoon " + guest + ".";  // the output value after the function is invoked
}
greeting("Mr. Smith"); // invoking or calling the function to execute the code (instructions) inside the function.

// Step Two: Assign the function invocation to a variable.
var testGreeting = greeting("Mr. Smith"); // assigning the function call into a variable 

// Step Three: Console.log the variable to test function output!
console.log(testGreeting); // printing the output value of the function.

// From your terminal, try running this file with node in order to see the result of `console.log(testGreeting);`

/*Below are some specifications for Functions to be built. */
/*
 * #1
 * Declare two variables
 *   @variable Datatype: Number `bango1`
 *   @variable Datatype:node  Number `bango2`
 *
 * These two variables will be used to invoke the functions #2 - #5.
*/ 
var bango1;
var bango2;

/*
 * #2
 * Function - add
 * Create a function named `add` which will take two parameters: `num1` and `num2`.
 * 
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will add two numbers (the parameters, `num1` and `num2`) and 
 * return the sum of these two numbers.
 * Invoke the function and assign it to a variable named `sum`.
 * Console.log `sum` to test your code.
*/
function add(num1, num2){
var result=num1 + num2;
return result;
};

var sum=add(1,2);

console.log(sum);
/*
 * #3
 * Function - subtract
 * Create a function named `subtract` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will subtract two numbers and return the difference of these two numbers.
 * Invoke the function and assign it to a variable named `difference`.
 * Console.log `difference` to test your code.
*/ 
function subtract(num1, num2){
var result=num1-num2;
return result;
}

var difference=subtract(127000,1210);

console.log(difference);

/*
 * #4
 * Function - multiply
 * Create a function named `multiply` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will multiply two numbers and return the product of these two numbers.
 * Invoke the function and assign it to a variable named `product`.
 * Console.log `product` to test your code.
*/
function multiply(num1, num2){
var result= num1*num2;
return result;
}
var product=multiply(120, 1/2);
console.log(product);

/*
 * #5
 * Function - divide
 * Create a function named `divide` which will take two parameters: `num1` and `num2`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @return Datatype: Number
 *
 * This function will divide two numbers and return the quotient of these two numbers.
 * Invoke the function and assign it to a variable named `quotient`.
 * Console.log `quotient` to test your code.
*/
function divide(num1, num2){

    return num1/num2
}
var quotient=divide(120, 15);
console.log(quotient);

/*
 * #6
 * Function - checkSum
 * Create a function named `checkSum` which will take a parameter: `x`.
 *
 *   @param Datatype: Number `x`
 *   @return Datatype: String
 *
 * This function will return the string "There are `x` states in the United States." Where `x` is the value when you invoke the function. Invoke this function using the variable `sum`. 
 * Console.log your result.
*/
function checksum(x){
    return "There are " + x + " states in the United States!"
};
var sum2= checksum(50);

console.log(sum2);

/*
 * #7
 * Function - checkDifference
 * Create a function named `checkDifference` which will take a parameter `x`.
 *
 *    @param Datatype: Number `x`
 *    @return Datatype: String
 *
 * This function will return the string "Last night I dreamt that I ate `x` Taco Bell soft tacos."  Where `x` is the value when you invoke the function. Invoke this function using the variable `difference`.
 * Console.log your results.
*/ 
function checkDifference(x){
return "Last night I dreamt I ate " + x + " Taco bell soft tacos"
};

var difference=checkDifference(20000000000000)
console.log(difference);

/*
 * #8
 * Function - checkProduct
 * Create a function named `checkProduct` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the sum and product variables.
 * Console.log your result.  
*/
function checkProduct(){
    return sum*product
}
var product2=checkProduct();
console.log(product2);

/*
 * #9
 * Function - checkQuotient
 * Create a function named `checkQuotient` which does not require any parameters.
 *
 *    @return Datatype: Number
 *
 * This function will multiply the values stored in the product and quotient variables.
 * Console.log your result.  
*/
function checkQuotient(){
    return product/quotient
}
var quotient2=checkQuotient();
console.log(quotient2);

/*
 * #10
 * Function - addThenSubtract
 * Declare three variables
 *
 *   @variable Datatype: Number `bango3`
 *   @variable Datatype: Number `bango4`
 *   @variable Datatype: Number `bango5`
 *   
 * Next, create a function named addThenSubtract which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will add the first two parameters together. Then with the sum of that operation, subtract it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 
var bango3;
var bango4;
var bango5;

function addThenSubtract(num1, num2, num3){
var ats1=num1+num2;
return ats1/num3;
}
var ats2=addThenSubtract(10,2,2);
console.log(ats2);

/*
 * #11
 * Function - multiplyThenDivide
 * Create a function named multiplyThenDivide which takes three parameters: `num1`, `num2`, `num3`.
 *
 *    @param Datatype: Number `num1`
 *    @param Datatype: Number `num2`
 *    @param Datatype: Number `num3`
 *    @return Datatype: Number
 *
 * This function will multiply the first two parameters together. Then with the product of that operation, divide it from the third parameter. PLEASE USE YOUR PREVIOUS FUNCTIONS FOR THIS EXERCISE. 
 * Console.log your result.
*/ 
function multiplyThenDivide(num1, num2, num3){
var first=num1*num2;
return(first/num3);
};
var mtd1=multiplyThenDivide(2,300,10)
console.log(mtd1);
/*

 * #12
 * Function - createFullName
 * Create a function named createFullName which takes two parameters: `firstName`, `lastName`.
 *
 *   @param Datatype: String `firstName`
 *   @param Datatype: String `lastName`
 *   @return Datatype: String
 *
 *  This function `returns` back a string which represents someone's full name. Invoke this function by passing in your first  and last name into the function. Store the return value into a variable named `myFullName` and console.log this variable to show your result.
*/
function createFullName(firstName, lastName){
return "Hi! My name is " + firstName + lastName
};

var myFullName=createFullName("Carter ", "Halfmann!"); 
console.log(myFullName);


/*
 * #13 
 * Function - eatFood
 * Create a function named eatFood which takes three parameters: `firstName`, `lastName`, `food`.
 *
 *   @param Datatype: String `firstName`
 *   @param Datatype: String `lastName`
 *   @param Datatype: String `food`
 *   @return Datatype: String
 *
 * This function will use the previous `createFullName` function above to create a message. For example, if you invoked the function like this: eatFood("Biggie", "Smalls", "Won Ton Soup"); it will display the message "Biggie Smalls eats Won Ton Soup everyday for breakfast."
 * Console.log your result.
 */
function eatFood(firstName, lastName, food){
 return firstName + lastName + "eats" + food + "every day."
};
var yum=eatFood("Bob ", "Duh ", " C4 ");
console.log(yum);


/************** ENGAGE HYPERDRIVE **************/
/* No more training wheels! For the exercises #14-18, use the experience you've
*  gained figure out how to build the necessary functions. Use your google-fu to 
*  figure out anything you don't know! Ganbatte (good luck)! */
/************** FIRE ALL CANNONS ***************/

/*
 * #14
 * Function shoeSize
 * Create a function that will take in a parameter named `inches`. This function will convert inches to centimeters(cm).
 * Console.log your result. 
*/
function shoeSize(inches){
return inches*2.54;
}
var shoez=shoeSize(20);

console.log(shoez);
/*

 * #15
 * Function allCaps
 * Create a function that will take in a parameter named `str`. 
 * This function will capitalize all the letters in the string. 
 * Console.log your result.
 * Example input: "believe you can and you're halfway there."
 * Example output: "BELIEVE YOU CAN AND YOU'RE HALFWAY THERE."
*/
function allCaps(str1){

    var strup=str1.toUpperCase();

return strup
}

console.log(allCaps("aqwertyuioPOASDFG"))





/*
 * #16
 * Function oneCap
 * Create a function that will take in a parameter named `str`. 
 * This function will capitalize only the first letter in the variable phase above. 
 * Console.log your result.
*/
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hi my name is weirdo bobb"));

/*
 * #17
 * Function - verifyDrivingAge
 * Create a function named verifyDrivingAge which takes a parameter named `age`. 
 * This function returns a Boolean value, `true` or `false`, depending on 
 * whether `age` is above or below the legal driving age in the state of Hawaii.
 *
 * Call this function and pass in a number value.
 * Store the return value to a variable named `canDrive`. Console.log your result.
 */

function verifyDrivingAge(age){
if(age >= 16){
   return true
}else{
    return false
}
}
var canDrive=verifyDrivingAge("15");


if(canDrive===true){
console.log("Good Job. The function has returned " + canDrive + ". You may now drive.");
}else{
    console.log("The function has returned " + canDrive + ". Get outta here!")
}
/**
 * #18
 * Function - roadTrip
 * Create a function named roadTrip. 
 * This function will check the value stored in the `roadTrip` variable in the previous exercise. 
 * If the value is true, it will return the message "Cheee Hoo! We goin on a Road Trip!" 
 * If false, then it will return the message "Meh, I guess I'll just stay home." 
 * Store the return value to a variable named `canDrive`. Console.log your result.
 */

 if(canDrive===true){
console.log("CHEEEEE-HOOOO!!!! WE goin on road trrrip")
 }else{
console.log("meh. I guess I'll just stay home")
 }
//it works...


