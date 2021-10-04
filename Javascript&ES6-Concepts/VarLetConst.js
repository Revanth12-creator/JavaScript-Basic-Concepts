//we can easily override in javascript see below
var username="reavnth";
username="Arun";//here insted of revanth printed Arun becaes it is overrided--[whch is came latest that only printed first]--
document.write(username);

//if it is differet datatypes how, example see below
var name="reavnth";//this is string
name=10;//this is number 
document.write(name);//this time also taken 10 because latest one but ["this way is wrong"]continuation below
//for that insted of the var keyword- ES6 instradused [ "LET AND CONST to define keywords  " ]

//LET AND CONST ===============================================================
const pancard=121245;//only one time assign a value and we can not chanege value 
// pancard=22222;//overrdide or updatee not passible in const keyword
document.write(pancard);//it will trow error

//when we have to use CONST and LET and Difference betweeen??
//First learn LET Keyword
let a=10;
let b=20;
 a=a+b;
 b=a-b;
 a=a-b; 
console.log(a);
console.log(b);
//above we are reassigning value for a and b this time we can use LET

//now will see CONST
//the const use when we con't change any number that time use const like Adhar,mobile,account-numbers
const accountNo=55444445445555;
console.log(accountNo);
//this time we have to use CONST============================================================

//differences
         //LET                                      //CONST
//1.we can declere let varible like[let name;]    1.we should be declere and initialize at the same time
//when we want reusing go throuh LET               2.if we want declere constant use CONST