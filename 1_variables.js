// There are three types of variable in javascript var, let and const 
// Avoid using var because of function scope

{
    var a = 10;
    let b = 15;
    const c = 20;
}
console.log(a); //result is 10 
console.log(b); // reference error b/c its a block scape out of curly braces { }
console.log(c); // reference error b/c its a block scape out of curly braces { }


 //we can not redeclare let variable it will show up an error 
let b = 30;
 console.log(b);

 let b = 'imtiaz';
 console.log(b)

 // but we can reassign the value to let variables
let a = 40;
console.log(a)  //print 40

a = 50;
console.log(a)  //print 50