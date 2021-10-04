//1.setTimeOut() Function 
//2.setIntervel() function
//3.using above methods cereating CLOCK TIME


//1.setTimeOut() Function =================================================================================
//it is used to setTiming only one time
// example1
let msg="good morning to all";
setTimeout(() => {
    console.log(msg);
},5000);
//above code will give o/p -good morning to all after 5 minites 

// example2
setTimeout(() => {
    console.log("please print after 5 minites");
},5000);



//2.setIntervel()() Function =================================================================================
//it is used to updating/changing time 
// example1
// let count=0;
// setInterval(() => {
//     document.write(count++);
// }, 1000);
//above code give o/p 012345 upadating




//3.using above methods CLOCK TIME=================================================================================
// example1
// let date=new Date();
// let month=date.getMonth();
// let year=date.getFullYear();
// let hour=date.getUTCHours();
// let minit=date.getMinutes();
// let second=date.getSeconds();
// let milliSec=date.getUTCMilliseconds();
// document.write(`<h1>CLOCK</h1>
// <h3>${date}</h3>
// <h3>${hour}:${minit}:${second}  Date-${month}-${year}</h3>
// `);



//3.using above methods Creating CLOCK TIME=================================================================================

setInterval(() => {
    let date=new Date().toLocaleTimeString();
    document.getElementById("template").innerHTML=`
    <h1>CLOCK</h1>
    <h2>${date}</h2>`;
}, 1000);
setInterval();

