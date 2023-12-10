
// console.log("Hello World");
 
// console.log(a);

let firstName = "Rishabh";
let age = 25;
let isMarried = false;

if (isMarried === true ){
    // console.log(`${firstName} is married`);
} else{
    // console.log(`${firstName} is not married`);
}





const array1 = [1, 2, 3, 4, 5]

for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    // console.log(`this is your ${element}th time`);
}





let answer = 0;

for(let i = 0; i <= 10; i++) {
    answer = answer +  1;
    // console.log(`Answer is : ${answer}`);
}



// ARRAYS

const ages = [21, 22, 23, 24, 25];

for( let i=0; i < ages.length; i++ ){
    if(ages[i] % 2 === 0){
        // console.log(ages[i]);
    }
}



//Largest Array

// let largestNumber = ages[0];

// for(let i = 0; i < ages.length; i++){
//     if(ages[i] > largestNumber ){
//         largestNumber = ages[i];
//         console.log(largestNumber);
//     }
// }




//ARRAYS of an object

const allUsers = [
    {
        firstName:"Raghav",
        gender: "male"
    },
    {
        firstName:"Raman",
        gender: "male"
    },
    {
        firstName:"Ramesh",
        gender: "male"
    },
    {
        firstName:"Priya",
        gender: "female"
    }  
]


for(let i = 0; i < allUsers.length; i++ ){
    if(allUsers[i].gender === "male"){
        // console.log(allUsers[i].firstName);
    }
}








// FUNCTIONS
 
function sum (a, b) {
    return a + b;
}

// console.log(sum(4,4));
// console.log(sum(2,2));



function sum0(a,b){
    let output = `The sum is ${a+b}`;
    let print_val = console.log(output);
    return print_val;
}   

// sum0(4,5);



// let sum = 0;

// for(let i = 0; i < 1000000000000; i++){
//     sum = sum + i;
// }

// console.log(sum);





function calculateArithmetic (a, b, type) {
    if(type == "sum"){
        return a + b;
    }
    if(type == "minus") {
        return a - b;
    }
}

const value = calculateArithmetic(1, 2, "minus");
// console.log(value);






function sum (num1, num2) {
    let result = num1 + num2;
    return result;
}


function displayResult(data) {
    // console.log("Result of the sum is : " + data);
}

function displayResultPassive (data) {
    // console.log("Sum's result is : " + data );
}


                // OR


function calculateArithmetic (a, b, type) {
    if(type == "sum"){
        return a +b;
    }
    if (type == "minus") {
        return a - b;
    }
}

const vlaue = calculateArithmetic(1, 2, "minus");
// console.log(value);




//👇👇 CALL - BACK - FUNCTION

function calculateArithmetic0(a, b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a, b)
    return ans;
}


function sum (a, b){
    return a + b;
} 

const value_0 = calculateArithmetic0(1, 2, sum);
// console.log(value_0 );    //  📍 Answer is "3"



// ++++++++++++++++++++++++++++++++++++++++++++

function greetAlient () {
    console.log("hello alien");
}

// setInterval(greetAlient, asds)

// setInterval(greetAlient, 1*1000)

// function setInterval (a, duration) {
//     a();
// }


// +++++++++++++++++++++++++++++++++++++++++++++




// ✅✅ META-DATA example :- 

const user = {
    name:"harkirat",
    age: 21,
    address: {
        houseNumber: "11",
        street:1
    }
}


// console.log(user["address"]["houseNumber"]);  // 📍 Answer is "11"

                // OR
const address = user ["address"];
const houseNumber = address ["houseNumber"];
// console.log(houseNumber);                     // 📍 Answer is "11"

                //OR
// console.log(user.address.houseNumber);        // 📍 Answer is "11"







function getLength (str) {
    console.log("Original String : ", str);
    console.log("Length :" , str.length);
}

getLength("Hello World");

// to understand ".length" thing 👇

let ant = "Hello World";

console.log(ant.length);