//SELECTING ELEMENTS

let abcd= document.getElementById("abcd");
console.log(abcd);
console.dir(abcd);  //displays in open format

let abc = document.getElementsByClassName("abc"); // all the elements with the class name as "abc" will be selected
console.log(abc);

let ab=document.querySelector("h1");  //the first h1 tag will be selected.....universal selector as id, class, varible anything can be selected hence to select id use ("#idname") and for class use (".classname") 
console.dir(ab);

let abcde=document.querySelectorAll("h1"); // all the h1 tags will be selected
console.dir(abcde); 

//----------------------------------------------//

//TEXT/CONTENT ACCESS : innerHTML, innerText, textContent
let h1=document.querySelector("h1"); 
// h1.innerHTML = "hello bhoomika"; //do not change the text, yeh HTML dalta h 

//h1.innerHTML means h1 ke andar wala HTML

h1.innerHTML="<i>hey</i>";


// h1.innerText = "hello";  //changes the text
//h1.textContent="hello colleagues"; //similar to innerText.....but is comparatively faster

//------------------------------------------------//

//ATTRIBUTE MANIPULATION : getAttribute, setAttribute, removeAttribute

//anything written inside the tag otherthan that tag is called the attribute

let a = document.querySelector("a");
//a.href="https://www.google.com";
console.dir(a);

//this manipulation can also be done by using the attribute manipulation

a.setAttribute("href", "https://www.google.com");  //(what attribute, with what value)

let img=document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1780534906959-986703bec0ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHZ5WmNJc3lIdlowfHxlbnwwfHx8fHw%3D");
console.dir(img);

let val = document.querySelector("a");
console.log(val.getAttribute("href")); //this will give the attribute value of the tag

val.removeAttribute("href");

//-------------------------------------------------------------//

//DYNAMIC DOM MANIPULATION (createElement, appendChild, removeChild, prepend)

//create element
//append/prepend karo aha bhi element chahiye waha

let h3 = document.createElement("h3"); //a blank h3 will be created
// console.log(h3);
h3.textContent = "hello ji namaste"; //adding value toh the tag
document.querySelector("body").prepend(h3);
console.dir(h3);

//------------------------------------------------//

//Style Updates 

let h33= document.querySelector("h3");
console.dir(h33);
h33.style.color="green";
h33.style.backgroundColor="black";
h33.style.textTransform="capitalize"

let i=document.querySelector("i");
i.classList.add("hulu"); //adding class to the element

i.classList.remove("hulu");  //removing class from the element

i.classList.toggle("hulu"); //it will perform the toggle, it the class is not then it adds the class and vice versa

//---------------------------------------//
//PRACTICE:

//<p>Lorem ipsum dolor sit.</p>
//element node              text node
//actual html tag           content in it 
//can have a child node     cannot have


let lis=document.querySelectorAll("li");
// lis.forEach(val=>{
//     console.log(val.textContent);
// });

//or

for(let i=0;i<lis.length;i++){
    console.log(lis[i].textContent);
}


//textContent aapka saara code nikalta h irrespective of ki jo display : none tha ya nhi
//this is preffered

//innerText sirf visible content hi nikalta h
