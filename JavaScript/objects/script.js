//To declare the object
let obj={
    name:"bhoomika",
    age:26,
    email:"abc@gmail.com",
};

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


//Object.entries -  creates an array that contains the array of the key-value pair

Object.entries(obj);//[Array(2), Array(2), Array(2)]

//Spread operator
let obj2={...obj};

//Object.assign - to copy - obslete
let obj3=Object.assign({},obj);
let obj4 = Object.assign({price:Infinity},obj);


//Deep Cloning
