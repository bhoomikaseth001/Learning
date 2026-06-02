//To declare the object
let obj={
    name:"bhoomika",
    age:21,
    email:"abc@gmail.com",
};
//KEY CAN BE BOOLEAN OR NUMBER

//To access the object
console.log(obj.age);
console.log(obj["age"]);
console.log(obj['name']);

//Reason why we have to ways to access the values in the object
let aa="name";
obj.aa
//agar hum aise likhte h...aur chahte h ki aa jiski value name h vo convert ho jaaye name me aur obj me jaa kar name property dhoondhe toh hum aisa nhi kar sakte h 
//kyuki... dot ke baad jo bhi likha hota h vo literally/as it is dhoondha jaata h obj me
//aur aa jaisa koi property nhi h obj me toh yeh method wrong h, LEKIN LEKIN...

obj[aa];
//hum aise likh sakte h, isme aa apni value ko name me convert karwa paayega jisse ki hum obj ke andar name ko access kar paayenge


//Deep Object
//nesting
const user={
    name:"Bhoomika",
    address:{
        city:"Lucknow",
        pin:226001,
        location:{
            lat:19.8,
            lng:65.4,
        },
    },
};

//deep access
console.log(user.address.location.lng); 

//Object Destructing

let {lat, lng} = user.address.location;
//now, lat and lng will give their respective values

//---------------------------------------------------//

//LOOPING
//------for-in

for(let key in obj){
    console.log(key,obj[key]);
}

//Object.keys - creates an array of the keys 
Object.keys(obj); //['name', 'age', 'email']


//------Object.entries -  creates an array that contains the array of the key-value pair

Object.entries(obj);//[['name','bhoomika'],['age','21'],['email','abc@gmail.com']]  

//Spread operator
let obj2={...obj};

//-------Object.assign - to copy - obslete
let obj3=Object.assign({},obj);
let obj4 = Object.assign({price:Infinity},obj);


//Deep Cloning
//if you have create a nested object then copying by spread operator is not an efficient as for nested object only the top level values are passed as real values aur jo andar ke nested objects hote h vo wapas se reference pass karne lagte h

let obj5={
    name:"bhoomika",
    age:26,
    email:"abc@gmail.com",
    address:{
        city:"lucknow",
    },
};

//let obj6={...obj5};
//obj6.address.city="Delhi"   //this will also change obj5

//using deep cloning
let obj6= JSON.parse(JSON.stringify(obj5));
obj6.address.city="Delhi";


//OPTIONAL CHAINING 

console.log(obj5?.address?.city);//? will be treated as the "optional" so that it will not give error incase the property is not found and will give undefined as output

 
//COMPUTED PROPERTIES
let role="admin";

let obj7={
    name:"bhoomika",
    age:26,
    email:"abc@gmail.com",
    address:{
        city:"lucknow",
    },
    [role]:"Aman",  //admin : "Aman"
                    //this field will the added to the object
};


//---------------------------------------------------//

//practice

//Q. Deconstruct the key "first-name" as a varible called firstName

const User={
    "first-name":"Bhoomika",
};

let {"first-name":firstName} = User;