// 1.now will learn old way to access function when we click on botton msg will print which is inside functioin
function subscribeFun(){
   document.getElementById("subscribe").innerHTML="Thank you for Subscribing";
}

//2.now will learn new  way to access button information when we click on botton
let MouseEvent= document.getElementById("btn2");
MouseEvent.addEventListener("click",(e) => {    //here click is the mouseEvent
//   document.write("thanks for clickng");
   let value=e.target.value;
   alert(document.getElementById("subscribe1").innerHTML="Thank you for Subscribing");
   console.log(e)
   console.log(e.target)
   console.log(e.target.value)
});



//3.now will learn new  way to access serch information when we writen anything=============pennding=========
let KeyBordEvent= document.getElementById("input");

KeyBordEvent.addEventListener("keyup", (e) => {    //here keyup is the keyBordEvent
   let value1= e.target.value;
   document.getElementById("MenuBlock").innerHTML =`<h1 style="color:red">${value1}</h1>`;
});



//4.now will learn new  way to access hower comncepts information when we hower on text
let mouseEvent1= document.getElementById("MenuBlock1");
mouseEvent1.addEventListener("mouseenter",(e) => {    //here click is the mouseEvent
  console.log("mouse enter")
  mouseEvent1.style.background="red";
  mouseEvent1.innerHTML="JavaScript";
});
mouseEvent1.addEventListener("mouseleave",(e) => {    //here click is the mouseEvent
    console.log("mouse leave")
    mouseEvent1.style.background="yellow";
    mouseEvent1.innerHTML="Nodejs";
  });

function test(){
   let search=document.getElementById("inputSearch").value;
  alert(search);
}
