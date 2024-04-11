const weights = [10,20,30];
console.log(weights);
console.log(weights[0]);
console.log(weights[1]);
console.log(`Before push ${weights}`);
weights.push(40);
console.log(`After push ${weights}`);

//merge
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [];

// for(let i = 0 ; i<arr1.length ; i++ ){
//     arr1.push(arr1[i]);
// } 
// console.log(`arr3 = ${arr3}`);

//spread operator
// const arr4 = [...arr1, ...arr2];
// console.log(`arr4 = ${arr4}`);


//map (es6)
//const  arr5 = [];
// for (let i = 0 ; i<arr1.length; i++){
//     arr5.push(arr1[i] * arr1[i]);
// }



// const arr5 = arr1.map((item)=>{
//     return item * item;
// });
const arr5 = arr1.map((item)=> item * item );
console.log(`arr5 = `,arr5);
console.log(`arr5 = ${arr5.join(",")}`);

console.log("I'm  writing this in boot terminal. I'm really cool");
