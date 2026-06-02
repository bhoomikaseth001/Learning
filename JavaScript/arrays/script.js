let marks = [80, 76, 90, 94, 93, 89];
console.log(marks[4]);
marks[2]=23; //modification
console.log(marks[2]);

//METHODS
let arr=[1,2,3,4,5,6];

arr.push(4000); //[1,2,3,4,5,6,4000]

arr.pop();//[1,2,3,4,5,6]

arr.unshift(0);//[0,1,2,3,4,5,6]

arr.splice(2,3) //(from which index, how many) [0,1,5,6]
//splice changes the actual array

let newarr = arr.slice(0,2); //[0,1]
//slice do not change the actual array, it give the return copy of the array in a new array

console.log(newarr); 

arr.reverse();//[6,5,1,0]

console.log(arr);

let a=[45,78,23,34,89];

console.log(a.sort()); //this will also sort the array but in ascending order

let sort_arr=a.sort(function(x, y){//sort function always accepts a function
    // return x-y;  //this will return the array in ascending order only
    return y-x;  //this will return the array in descending order
});
console.log(sort_arr); //[89, 78, 45, 34, 23]

//-----------------------------------------------------//

//MAP, FILTER, REDUCE, sort, forEach- they all accepts a function

//------forEach
let array=[11,24,5,4,16];

array.forEach(function (val){
    // console.log(val);
    console.log(val+5); //16 19 10 9 21 - in separate lines
});

//------map

//map tab use karna h jab aapko ek naya array banana h pichle array ke data ke basis par

//map dikhte hi saath mann mein ek blank array bana liya kro
let new_A = array.map(function(val){
        return 12; // return karna is must in map aur agar return nhi karoge toh jitne elements main array me the utne ki undefined elements print kar dega
})
console.log(new_A); //[12,12,12,12,12]

//another example for map
let new_a = array.map(function(val){
    if(val>10) return val;
});
console.log(new_a); //[11,24, undefined, undefined,16]

//-------filter

let Arr=[1,4,3,4,5,6]


let new_array=Arr.filter(function(val){
    if(val>4) return true;
});
console.log(new_array); //[5,6]
//only the values of the array that are true will be printed others will be skipped


//--------reduce
//reduce an array to a single value

let ans = Arr.reduce(function(accumulator, val){
    return accumulator + val;
},0); //here 0 is the value of the accumulator
//accumulator apni value yaad rakhta h 
console.log(ans)
//for eg. acc=0, val=1,     return 0+1 = 1 ,     this 1 will be return to the accumulator
//next step: acc=1, val=2,    return 1+2=3,
//          acc=3, val=3,      return 3+3=6....so on.

//--------find

let v = Arr.find(function (val){
    return val > 4; //5   //this will return the first value that will satisfy the condition
});
console.log(v);


//--------some

let va=Arr.some((val)=>{ //using fat arrow function
    return val<4; // true    will return true if any of the value satifies the condition
});
console.log(va);

//-------every
let Ans=Arr.every((val)=>{
    return val>4; //false....this checks if every value satifies the condition
});
console.log(Ans);

//------------------------------------------------------------//

//Destructuring 
let Array=[1,2,3,4,5,6,7,8]
let [p,q, , s]=Array; //p=1,q=2,s=4


//Spread Operator(rest operator in functions)

let copy=Array; //using this will not copy the value of the Array bcz it is a reference value

let Array2=[...Array];
console.log(Array2);

//----------------------------------------------------------//
//practice

//Q. add "red" and "blue" at the 1st index
colors=["green","yellow"];
colors.splice(1, 0, "red", "blue");
//  (from which idx, how many to remove, what to insert)


//Q. Merge 2 arrays usings spread operator
let a1=[1,2];
let b1=[3,4];

let c=[...a1, ...b1];


//Q. Add "india" at the begin using spread operator
let countries=["USA", "Japan"];
countries=["india", ...countries];

//BLUNDERS

[100,20,3].sort();  //[100,20,3]->"100", "20","3" (wrong)......sort() will change the numeric array into a string array

//the correct way to do this is....

[100,20,3].sort((a,b)=>a-b); //this will correctly sort the array in ascending order