//EVENTS

//select the paragraph first
// let p = document.querySelector("p");

// //add the event listener (event, what is needed to be done)
// p.addEventListener("click", function(){
//     p.style.color="red";
// });

//another way
// function dblclick(){
//     p.style.color="green";
// }
// p.addEventListener("dblclick",dblclick);

// //removing an eventListener
// p.removeEventListener("dblclick",dblclick);

//-------input event

// let inp = document.querySelector("input");
// inp.addEventListener("input",function(dets){  //this "dets" here is an event object
//     if(dets.data !== null)
//     console.log(dets.data);
// });

//change
//yeh tab chalta h jab aapka koi input select ya textarea me koi chnage ho jaaye

// let sel=document.querySelector("select");
// let device=document.querySelector("#device");

// sel.addEventListener("change",function(dets){
//     device.textContent=`$(dets.target.value) device selected`;
// });

//----a small tool----
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     if(dets.key === " ")
//         h1.textContent = "Spc";
//     else
//         h1.textContent = dets.key;
// });

//  


//-------submit
//the html of this section is not written in the htmk file

// let form=document.querySelector("form");
// let inputs= document.querySelectorAll("input");
// let main=document.querySelector("#main");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault(); //to stop the reloading of the page


// let card=document.createElement("div");
// card.classList.add("profile");

// let profile=document.createElement("div");
// profile.classList.add("profile");

// let img=document.createElement("img");
// img.setAttribute("src",input[0].value);

// let h3=document.createElement("h3");
// h3.textContent=input[1].value;
// let h5=document.createElement("h5");
// h5.textContent=input[2].value;
// let p=document.createElement("p");
// p.textContent=input[3].value;

// profile.appendChild(img);
// card.appendChild(profile);

// card.appendChild(h5);
// card.appendChild(h3);
// card.appendChild(p);

// main.appendChild(card);

// input.forEach(function(inp){
//     if(inp.type !== "submit"){
//         input.value="";
//     }
// });
// }); //closing form


//------mouseover
let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor="yellow";  //making the square yellow on placing the mouse over it 
// });
// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor="red"; //making the square red when the mouse is out of the square
// });

// window.addEventListener("mousemove",function(dets){
//     abcd.style.top=dets.clientY+"px";
//     abcd.style.left=dets.clientX+"px";
//     //this top-left property will work when the position of the element is set as "absolute"
// });

//keyup

//--------------------------------------------------------//

//EVENT OBJECT: target, type, preventDefault
// abcd.addEventListener("click", function(dets){
//     console.dir(dets);
// });

//here....dets is the event object, target is the element on which the event is performed, type is the type of event, preventDefault is usually used in forms to prevent the reloading of the page on clicking the submit.

//---------------------------------------------------------//
//EVENT BUBBLING
//jisper event aayega agar uspar listener nhi hua toh humara event uske parent per listener find karega and aise karte karte upar it taraf move karega


let ul=document.querySelector("ul");
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lt");
})

//ek matlab iska yeh bhi h ki agar child ke pass listener h toh pahle vo chalega phir vo bubble karke parent ke pass jaayega phir parent chalega

//jab bhi aap click karte ho ya koi bhi event raise karte ho toh aapka jo event flow/ event propogation h vo 2 phases me chalta h 
//phase 1(capture phase):  event top level element se neeche ki taraf jaayega
//phase 2(bubble phase): event raised element se parent ki taraf jaayega
//aur pahle phase 1 chalta h per by default vo off rehta h, agar hum usko on kar de toh pahle uska ans hi milega-- this is event capturing



 

