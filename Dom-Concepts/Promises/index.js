//promises is a Object .used mainy in API's 
//1.in promises having 3 states a)initial state, b)reject State, c)success sate
//it has 2 parameters
//how it is usful in API,
//1.when we acces data throgh API  data is accessed shows output .like it means [success] throgh than() 
//2.when we acces data throgh API  data is not accessed shows output .like it means [rejected] throgh catch()  
//3.just connected shows [pending/initial stage]
//it is Ruunig on  than and catch  blocks see below 
//its a asynchrnous



let promises = new Promise((x,y) => {
    let stat=true;
    if(stat){
       x("success");
    } else {
        y("rejected");
    }
});

promises.then(data => console.log(data))
.catch(err => console.log(err))

console.log(promises);




//what is  Async/await
// The word “async” before a function means one simple thing: a function always returns a promise.
//  2. The keyword "await" makes JavaScript wait until that promise settles and returns its result.
//  Why an async function would always return a promise if "await" pauses the execution waiting for a result?
//examle
// async function f() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     alert(result); // "done!"
//   }
  
//   f();

