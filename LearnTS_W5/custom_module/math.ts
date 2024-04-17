
export const pi = 3.1415926535;

//sum normal function
export function sum(a: number, b:number){return a+b;} 
//sub anonymous function
export const sub = function(a:number, b:number){return a-b}
//mul arrow function
export const mul = (a:number, b:number)=>{return a * b;}
//div short arrow function
export const div = (a:number, b:number) => a/b

export default {
    a: 10
}