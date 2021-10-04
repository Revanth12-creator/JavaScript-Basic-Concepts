let buttton=document.getElementById("btn");
buttton.addEventListener("click",speech);
function speech(){
 window.SpeechRecognition=window.SpeechRecognition || webkitSpeechRecognition;
 let Recognition=new SpeechRecognition();
 Recognition.addEventListener("result",(e) => {
   let transcript=[...e.results].map(result => result[0]).map(result => result.transcript).join("");
   if(e.results[0].isFinal){
    search.value=transcript;
    let p=document.getElementById("para");
    p.textContent=transcript;
  }  
   })
   Recognition.addEventListener("end",Recognition.start);
 Recognition.start();
}
