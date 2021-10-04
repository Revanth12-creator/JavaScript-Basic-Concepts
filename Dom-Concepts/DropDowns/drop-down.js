
let ul=document.getElementById("proile");
ul.addEventListener("mouseenter", (e) => {
    console.log(e.target)
    let dropDown=document.getElementById("droupDown");
    dropDown.classList.toggle("show");
});

ul.addEventListener("mouseleave", (e) => {
    console.log(e.target)
    let dropDown=document.getElementById("droupDown");
    dropDown.classList.toggle("show");
});
