addEventListener("click",(e) => {
    e.preventDefault();
    let FirstValue=parseInt(document.getElementById("firstValue").value);
    let SecondValue=parseInt(document.getElementById("secondValue").value);
    document.getElementById("result").value=FirstValue + SecondValue;

})

