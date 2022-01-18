/*1)Var variable-var is function scoped.It means they are only available inside the function they are created in,
or if not created inside a function, they are globally scoped.
*/
var a=9;//global variable
var b=4;
var z=a+b;
console.log ("Addition is:"+z);

function abc(){  
var x=10;//local variable  
console.log(x);
console.log(a);
} 
abc();//calling function

//Let-is block scoped 
//Global scope
let x =20; 
console.log("Outside the function x = " + x); 

function show(){ 
    console.log("Inside the function x = " + x); 
} 
show();

//Local scope
function show(){   
    let num = 15;   
    console.log("Inside the function num = " + num);   
}   
show();   
console.log("Outside the function num = " + num);  

//Block scope
{ 
    let number = 30; 
    console.log("number = " + number);   
} 
console.log("number = " + number);   


//Const-const variable cannot be reassigned.
const x = 16;
console.log("Constant x:"+x);
x = 23; //type error
console.log("Constant x:"+x);
