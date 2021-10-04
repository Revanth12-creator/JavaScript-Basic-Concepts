//=====================all tages whater written in html code ==================================================
let allTages=document.all;
console.log(allTages)


//==============================prints all anchors tages whater written in html=========================================
let a=document.anchors;
console.log(a)

//===========================prints all images  whater written in html===============================
let img=document.images;
console.log(img)


//===========================prints title  whater written in html===============================
let titl=document.title;
console.log(titl)


//===========================prints screits  whater written in html===============================
let scrip=document.scripts;
console.log(scrip);

// -------------------------like above watever you want you can access -------------------------------------





// ========================now will learn  write text to tags through the Dom ===================================
// examle
let template=document.getElementById("template");
template.innerHTML=`iam the div tage text`;//o/p through DOM we are writing contet 
console.log(template);



// ========================now will learn  write className atribute  to tags through the Dom ===================================
// examle
template.classList.add("DivBlock");//o/p through DOM we are writing class name  
console.log(template);


// ========================now will learn  write class setAtribute  to tags through the Dom ===================================
// examle
template.setAttribute("class","fff")//o/p through DOM we are writing class name  
console.log(template);



