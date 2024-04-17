// import/Export
// 1.variable(let,const) เก็บค่า
// 2. Function เก็บการกระทำ


//#function 
    //function add(a: number ,b: number){}
//#anonymous function
    //const sub = function(a,b){}
    //sub(1,2);
    // const z = 5;
    // const a = เพิ่ม;
//#arrow function
    //const mul = ()=>{}
    //mul();

// import {pi,sum,sub,mul,div} from "./custom_module/math";
// console.log(pi);
// console.log(sum(10,5));
// console.log(sub(10,5));
// console.log(mul(10,5));
// console.log(div(10,5));

// import { fetchJsonPlaceHolder } from "./custom_module/jsonplaceholder";
//or
import * as jsonP from "./custom_module/jsonplaceholder";
// console.log(jsonP.fetchJsonPlaceHolder())

// 1. promise (.then, await)
// 2. await doSomthing()
// 3. await must be called inside async function
// V
// const main = async ( ) => {
//     const result1 = await jsonP.fetchJsonPlaceHolder();
//     console.log("result1 :" ,result1);
    
//     const result2 = await jsonP.fetchAxios();
//     console.log("result2 :" ,result2);
//     // const result2 = await result1.json();
//     // console.log("result2 :", result2);     
//     // make all of this shorter by move to module
// }
// main();


import callbackFn from "./custom_module/callback";

const handler = (xxx:string) => {
    console.log(xxx);
}

callbackFn(handler);
