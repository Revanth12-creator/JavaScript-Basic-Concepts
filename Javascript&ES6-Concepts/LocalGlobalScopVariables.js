//we have 3 types of variables see below
//1.Local Variables, 2.Globle variables, 3.blocked Scope variables

//1.Local Variables
//pionts
//1.whatever write inside a Function it is called Local variable
//2.this variable we can not access outside , inside function only we can access
//3.local variables are secured/protected
//example code =================================
// function LocalVariable(){
//      var name="iam the local variable";
//      console.log(name);//here we are accessing only inside the fumction so it will give output
//  }
//  console.log(name);//.====here we are accesing outside the function it is giving wrong
//  LocalVariable();
 


// 2.Globle variables===================================================================
//pioints
//1.whatever write outside a any block{}/if/for/foreach/function it is called Global variable 
//continuation if we declared with var inside a function we can access outside also 
//2.this variable we can  access outside also 
//3.but that variable declered with LET keyword this time we can not access outside bescose that was become a secured 
//4.global variables are not secured when declered with LET it will become secured
//example code 
for(i=0; i<=10; i++){
    var Globalname="iam Global variable";
    console.log(i);
}
console.log("iam the global",Globalname);//====here we are accesing outside the for loop it will give output correctly


// 3.blocked Scope variables==================================================================
for(i=0; i<=10; i++){  
let blockScop="iam the Block scope";
    console.log(i);
}
console.log("ddd",Globalname);

