// function foo(){
//     console.log("Foo");
// }

// foo();

// const foo = () =>{

// }

let x=1;
const zeroNumber = (x : number) => {
    return new Promise( (resolve, reject) => {
        const cid = setInterval( () => {
            console.log(++x); 
            if (x === 1){
                clearInterval(cid);
                 }
        } , 1000 );
        if (x === 0){
            resolve(0);
        }else{
            reject(new Error("No it not zero"));
        }
      } );
}

// zeorNumber(0)
//     .then( (x) => console.log(x))
//     .catch((Error) =>{ console.error(Error)});  // short term

// const responses = zeroNumber(0);
// console.log("responses",responses);

//====async and await exmple====
(async () => {
    const responses = await zeroNumber(0);
    console.log("responses",responses);
})();
    
// zeorNumber(0).then(
//     (x) => {
//         console.log(x);
//     }
// );
console.log("... End program")