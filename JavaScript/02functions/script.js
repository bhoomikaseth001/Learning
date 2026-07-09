//METHOD 1
//Function declarations
function hello() {
    console.log("hello world")
}
hello();

//METHOD 2
//Function expression
let fnc = function () {
    console.log("hehehhehe");
}
fnc();

//METHOD 3
//Arrow functions
//why arrow function? - shrink
//                    - anonymous
//                    - to use func as variable

//arrow function -> call function ??


let func = () => {
    console.log("heyheyhey");
}
func();
//-----------------------------------------------------//

//Parameters and arguments

function sub(a, b) {
    console.log(a - b);
}
add(14, 5); //arguments  

function add(v1, v2) {
    console.log(v1, v2);//undefined undefined
    console.log(v1 + v2); //NaN
}
add();

//------------------------------------------------------------//

//default, rest and spread parameters

function mul(v1 = 10, v2 = 5) {//default
    console.log(v1 * v2);
}
mul(30, 2);
mul(30);

function abcd(...val) {
    console.log(val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//jab argumetns kai saare ho toh hume utne ji parameters banane padenge to avoid this we use rest ...
//agar ... function ke parameter space me lage to woh operator h aur agar vo arrays and objects me lage toh vo spread operator h 

function abc(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abc(1, 2, 3, 4, 5, 6, 7, 8);

//---------------------------------------------//
//return and early values

function abcd(v) {
    return 12 + v;
}
let val = abcd(23);
console.log(val);
//--------------------------------------------------//

//FIRST CLASS FUNCTIONS- functions ko values ki tarah treat kar sakte h

let xyz = function () {

}

//and

function wxyz(val) { // this is also a hof as it is accepting a funciton in its parameter
    val();
}
wxyz(function () {
    console.log("hi");
})

//HIGHER ORDER FUNCTION - vo function jo return kare ek function ya accept kare ek funciton apne parameter me

function message() {
    return function () {
        console.log("hello everyone")
    }
}
message()(); //this first () is to execute message function and the second () is to execute the function returned by the message funciton

//------------------------------------------------------//
//pure vs impure functions
//pure-func jo bahar ki values ko change na kre
//impure-jo bahar ki values ko change na kare

let a = 12;
function mess() {
    console.log("hehheheh");
}

function hui() {
    a++;
}

//-------------------------------------------------//

//CLOSURES -> ek func jo return kare ek aur func air return hone wala func humesha use karega parent func ka koi variable

function laadi() {
    let diva = 10;
    return function () {
        console.log(diva);
    }
}

//LEXICAL SCOPING

function grandparent() {
    let a = 10;
    function parent() {
        let b = 12;
        function child() {
            let c = 14;
        }
    }
}

//IIFE(immediately invoked function expressions)
(function () {
    console.log("already called");
})(); //you do not need to call this function separately,...its already being called using ()

//---------------------------------------------------//

//HOISTING DIFFERENCE BETWEEN DECLARATION AND EXPRESSIONS

lolo();
//hehe();



function lolo() { //func declaration can be hoisted
    console.log("lolololololo");
}

// let hehe=function(){ //func expression cannot be hoisted
//     console.log("hehehehehehe");
// }
//-----------------------------------------------------------//

//PRACTICE
let multiply = (a, b) => {
    return a * b;
}

//Q. use rest parameter to accept any number of scores and return the total
function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total += val;
    })
    return total;
}
console.log(getScore(10, 13, 15, 18, 19, 12));

//
function checkAge(age) {
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(19));
console.log(checkAge(16));


//Q. pass a func inside another func and execute it inside
function greet(val) {
    val();
}
greet(function language() {
    console.log("hey");
});

//Q. o/p?
function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); //1
counter(); //2


//Q.closure

function counterr() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let asd = counterr();//will set count=0
console.log(asd());//1 //only executes the returned function
console.log(asd());//2
console.log(asd());//3
console.log(asd());//4

let d = counterr();//will set count=0
console.log(d());//1


