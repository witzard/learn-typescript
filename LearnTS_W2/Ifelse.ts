
// //  V in side bracket must be have value in true or false 
// if(true){
//     console.log("This is true");
// }
// if(false){
//     console.log("This is false");
//     //nothing show
// }


import readlineSync from 'readline-sync'
const weight = Number(readlineSync.question("Input your weight(kg): "));
const height = Number(readlineSync.question("Input your height(m): "));
let BMI: number;

BMI = weight/((height)*(height));
console.log("BMI is : "+BMI);

if(BMI<18.5){
    console.log("Underweight แห้ง");
}
else if (BMI>=18.5 || BMI<= 24.9){
    console.log("Normal งั้นๆอ่ะ");
}
else if (BMI>25 || BMI < 29.9 )  {
    console.log("Overweight อ้วน");
}