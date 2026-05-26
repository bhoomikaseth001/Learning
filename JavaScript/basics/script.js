//var let const

// var a =12;
//window me add karta h  
//function scoped hota h
//can be redeclared with the ssame name and will not give error
// var a = 12
// var a = 13

//writing this will not give error but writing the same thing in let will give, hence let is more secure

//in any prog lang if a variable is declared inside the if block then it can only be used inside if but in js since js is function scoped of it can be used in the whole function
// function abcd(){
//     if(true){
//         var a = 12;
//     }
// }

// {
//     let a = 5 // let is block scoped
// }
//-----------------------------------------//

//SCOPE(global, block, functional)
//{
//     -> this is a block
//}
//global scope - poore code me access kar sakte h
//function scope- function ke andar access kar sakte h
//block scope - {} ke andar access kar sakte h

//--------------------------------------------------//

//REDECLARATION AND REASSIGNMENT
//redeclaration is allowed in var....but it is a problem which is fixed in let
//only reassignment is allowed in let

//--------------------------------------------------//

//TEMPORAL DEAD ZONE- utna area jitne me js ko pata h ki variable exists per vo usko access kr ke value nhi de sakta.....tdz of x is from line 40 to 43


//console.log(x);

//let x=12;

//---------------------------------------------------//

//HOISTING IMPACT PER TYPE
  
//hoisting= jab ek variable ko js me banaate h toh wo variable do parts me break ho jaata h, uska declare part upar chala jaata aur uska initialization part neeche reh jaata h

// var b = 12; //this is broken in 2 parts as below

// var b= undefined;
// b = 12;

//what this means is...the var b=undefiend goes up means at the very start of the code and the b=12 will remain neeche...THIS IS THE REASON WHY WE DO NOT GET THE ERROR OF WE TRY TO ACCCESS THE VARIABLE BEFORE DECLARING IT
//var->hoist->undefined
//let->hoist->X
//const->hoist->X

//------------------------------------------//
// const person={name:"Harsh"};
// person.name="Sharma";  //allowed
// person={};  //not allowed

//by using Object.freeze u cannot change the properties of your object

//----------------------------------------------------------//
//DATA TYPES+ TYPE SYSTEM
// PRIMITIVE - aisi values jinko copy karne per hume ek real copy mile jaaye....string, number, boolean, null, undefined, symbol, bigInt

// REFERENCE - inko copy karne par real copy nahi milegi but aapko reference milega parent ka...arrays, objects, functions....[]  {} ()


//null...means aapne jaan kar koi value nhi di 
//undefined...means aapne ek variable banaya aur usee value nhi di toh use by default undefined value mil jaati h

//symbol-> unique immutable value

//DIDN'T UNDERSTANDDDDD


//bigint-> 
let t=9007199254740991n
console.log(t);
console.log(t+3n);
console.log(t+4n);


//arrays
let a=[1,2,3]
let b=a
b.pop() //since b ke pass a ka referrence h and not the actual value toh b se pop karne per a se bhi pop ho jaayega
console.log(a);
console.log(b);
//-----------------------------------------------//                

//Dynamic typing -> js mein sirf dynamic typing hoti h, static typing nhi hoti h ...dynamic typing ka matlab h ki hum data ko change kar sakte h  kyuki yaha per dynamic data types h 

//TYPE COERSION

console.log("5"+1) //agar js ko ek bhi string operand mil jaata h toh vo + se add nhi concate kar deta 

//0 false "" null undefined NaN document.all
//to check the truthy or falsy if a value we need to put !! in front of the value

console.log(true+false) //true=1, false=0 ->1+0->1
console.log(null+1) //0+1 =>1
console.log(5+"5") //55
console.log(!!undefined) //false

console.log(typeof NaN === 'number') //true...because NaN is a failed number operation eg. 2 X "harsh" will give you NaN...i.e. it is a type of number but is a failed operation

console.log(typeof null) //object
console.log(typeof []) //object

console.log('5'+1) // + is there hence concat and create a string '51'
console.log('5'-1) // - is there hence js will convert it to a number 4

console.log(+"5") // 5...this will convert the string to a number
console.log(+"bhoomika")//NaN...as this cannot be converted to a number

 //-------------------------------------------------------------------//