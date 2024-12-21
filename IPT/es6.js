// Todays Class Objectives --> ES6+
//      1-Arrow Functions
//      2-Template literals
//      3-Object Destructuring
//      4-Array Destructuring
//      5-Object literals
//      6-For of loop
//      7-Rest Operator
//      7-Spread Operator
//      8-Import/export

// //Template Literal
// let num1 = 20;
// let num2 =30;

// console.log("Sum of num1 and num2 is:"+num1+num2);
// console.log(`Sum of ${num1} and ${num2} 
//     is:${(num1+num2)}`)


// // Object Destructuring

// let myCar =  {
//     1:"Car",
//     model:2008,
//     company:"Honda",
//     variant:"Civic",
//     registerNO:"abc-543"
// }
// let {model,registerNO}=myCar;

// console.log(model);



// // Array Destructuring
// let courseCode= [302,405,502,633,610];
// let [ics,dbms]=courseCode;


// // Object Leterals

// function empData(name,address,contact){
//     let empDetail={
//         name,
//         address,
//         contact,
//         department:"IT"
//     }
// }

// Spread Operator
let newCourses=[310,420,510];
let courseCode1= [302,405,502,633,610];
courseCode1.push(...newCourses);


console.log(courseCode1);

// Rest Operator

function add(...nums){
    let sum=0;
    for (num of nums)
    {
        sum+=num;
    }
console.log(sum);
}

add(20,10);
add(30,43,32,20);
add(20,15,20)