//primitive datatype (Stack memory ->copy of value)

//non-primitive datatype(reference datatype)(Heap memory->address of value)

let a=10; //primitive datatype
let b=a; //copy of value
b=30;
console.log("a=",a);
console.log("b=",b);

let obj1={
    name:"Bhoomika", 
    age:21
}; //non-primitive datatype
let obj2=obj1; //address of value
obj2.age=22;

console.log("obj1=",obj1);
console.log("obj2=",obj2);

