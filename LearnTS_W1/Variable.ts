// // var, let, const
// let x = 0; 
// x = 5;
// x = 10; 
// //x = "String" can not print because x is already define as number
// console.log(x)

// let y: number;
// y = 5;
// console.log(y);

// const z = 10 // constant
// console.log(z);

// const message = "Hello world";
// console.log(message);

// const isFat = true;
// console.log(isFat);

// Example: weight
// const weight1 = 50;
// const weight2 = 60;
// console.log("Sum of weight is: "+ 50 + 60); //5060
// console.log("Sum of weight is: "+ (50+60)); //110
// console.log("Sum of weight is: "+ (weight1+weight2)); //110

//Question1 BMI calculator
const weight = 60;
const height = 1.75;
let BMI: number;

BMI = weight/((height)*(height));
console.log("BMI is : "+BMI);
//Question2 Celcius to Farenhheit 
const c = 30;
let f: number;
console.log(`Celcious = ${c} -> Farenheit ${(c*(9/5)+32)}`);

//Question3 : some calculation
