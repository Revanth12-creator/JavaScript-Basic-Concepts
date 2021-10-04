let form=document.getElementById("submitBlock");
let username=document.getElementById("gmail");
let password=document.getElementById("password");
let error=document.getElementById("errorBlock");
let success=document.getElementById("success");
let errorUsername=document.getElementById("errorUsername");
let erroPassword=document.getElementById("erroPassword");

form.addEventListener("submit", (e) => {	
    // e.preventDefault();
    let uname=[];
    let upwd1=[];
    let upwd2=[];
    if(username.value === "" || username.value === null){
        uname.push("<p>gmail Required</p>");
    }
    if(password.value === "" || password.value === null)
    {
        upwd1.push("<p>Password Required</p>");
    } 
    if(password.value.length < 6 && password.value.length > 0)
    {
        upwd2.push("<p>Password shoud be minimum 6 charecters</p>");
    } 
    if(uname.length > 0){
        errorUsername.innerHTML=uname.join("");
    } 
    if(upwd1.length > 0){
        erroPassword.innerHTML=upwd1.join("");
    } 
    if(upwd2.length > 0){
        erroPassword.innerHTML=upwd2.join("");
    } 
    if(upwd1.length === 0 && upwd2.length === 0 && uname.length === 0)
     {
        success.innerHTML="Succesfully Submited";
    }   
});

// The preventDefault() method cancels the event if it is cancelable, 
// meaning that the default action that belongs to the event will not occur. 

let link=document.getElementById("link");
let cb=document.getElementById("cb");

link.addEventListener("click",(e) => {
    if(!cb.checked){
    e.preventDefault();
    }
});
