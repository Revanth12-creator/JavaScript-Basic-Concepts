 // let html=document.createElement("html");
// let head=document.createElement("head");
// let body=document.createElement("bady");
let section=document.createElement("section");
let article=document.createElement("article");
let form=document.createElement("form");
let input=document.createElement("input");
input.setAttribute("type","text");
let input1=document.createElement("input");
input1.setAttribute("type","text")
let button=document.createElement("button");
button.textContent="Login";
// html.appendChild(head);
// head.appendChild(body);
// body.appendChild(section);
section.appendChild(article);
article.appendChild(form);
form.appendChild(input);
form.appendChild(input1);
form.appendChild(button);
// console.log(html);
let a=document.getElementById("block");
document.body.appendChild(section)
