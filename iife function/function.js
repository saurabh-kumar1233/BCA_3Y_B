
// (function msg(){
//     console.log("happy janmastmi");
    
// })()                    // iif function in js


// program sum of two number using iif function(immediatly invoked function expression).---------->

// (function (a , b){

//     console.log(`the sum of ${a} and ${b} is ${a+b}`);
    
// })(10,15)

// generater function in js --------------------------------------------------------------------------->
function *mygen(){
    // yield 1
    // yield 2
    // yield 3
    // yield 4
    for(let i=1;i<=100;i++)
         yield i
    
}
const g= mygen();
for(let i=1;i<=100;i++)
    console.log(g.next().value);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());




