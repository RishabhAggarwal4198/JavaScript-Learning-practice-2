
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

console.log(sum(4,4));
console.log(sum(2,2));
