//Function is a repreaseting the beheviar
//we can write a function  in four ways
//1.Ananimous function  2.Funcion statement/naming function 
//3. function Expresseion 4.Immediate invoke function 5.Arrow funtion   6.constarctor funtion

//1.Ananimous Function : "where a function does not having any name ";
//exapmle
// function(){
//     console.log("Ima the Anonimoys function");
// }
//to call Ananimoys function we should assingn to anothe variable/function without assign we can't call
//example
let assign=function(){
    console.log("I am the Anonimoys function");
}
assign();


//
//. Function Statement: "a function having with name  ";
//exaple
function add(num1,num2){
    let sum=num1+num2;
    return sum;
}
console.log(add(10,20));

//with help of funtion statement we can do hoisting
//2.1. Hoisting : "a method calling before declaring called hoisting"
//exaple
test(); //here calling function before declaring
function test(){
    console.log("iam hoisting ");
}

//3. function expression :a function assigning to  the variable called expression
//exaple
let value=function sample(){
    console.log("iam the expression function");
}
value();
//for the expresseion function we can not do hoisting
              // difference b/w 
        //fun statment and                fun exrpression
//1.fun statement must have a name    1.fun expresssion not rewuired
//2.fun statement can hoisted         2.fun expression can't hoisted


//4.Immediate invoke function: it is calling immediatley afetr function 
//exaple 
(function(){
    console.log("i am the immediate invoking function");
})();
//it is ivoking with help of paranthesis ()


//5.Arrow funtion :it is ES6 feature it is reduce the code of line
//exmpla1 one with out parametes
let Arrow=() => {
    console.log("i am the arrow funtion1")
}
Arrow();
//exmpla2 one with parameters
let Arrow1=(name) => {
    console.log("i am the arrow funtion2")
    return name;
}
console.log(Arrow1("Revanth"));

//exmpla3 if is one parameter we can remove  parameters also
let Arrow3= name => {
    console.log("i am the arrow funtion3")
    return name;
}
console.log(Arrow3("Kumar"));

//exmpla4 for multiple parametes
let Arrow4=(name,age) => {
    console.log("i am the arrow funtion2")
    return {name,age};
}
console.log(Arrow4("Sake",23));


//6.function constarctor:it is same as in java method
//example
function EmDetaials(name,age,salary,company){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.company=company;
}
let EmDetaials1=new EmDetaials("Sudharshan", 22, 22000, "consaltancy");
console.log(EmDetaials1);
//----------------------------------------------------------------------------------------
// now will learn calling dynamically see below
function User(name){
    return name;
}

const getvalue=prompt("User please enter name");
document.write(User(getvalue));


//example2 same above concept anothe way first statically 
function studetDetails(name, age, salary, company){
    return{ name,age, salary, company};
}
console.log(studetDetails("surya",23,25000,"statap"))

//now above code will learn calling dynamically anothr way using constractor see below
function EmployyeetDetails(name, age, salary, company){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.company=company;
}
const getEmployeeDetais1= new EmployyeetDetails("sri",20,25550,"statap");
const getEmployeeDetais2= new EmployyeetDetails("ram",21,26550,"statap");
const getEmployeeDetais3= new EmployyeetDetails("sam",22,27550,"statap");
console.log((getEmployeeDetais1));
console.log((getEmployeeDetais2));
console.log((getEmployeeDetais3));


//4.now will learn arguments ====================================================================
function moblies(){
    return arguments;
}
console.log(moblies("vivo","MI", "opp"));//it is printed into object type
//above code given o/p array like object ,but you want print as Array see below

function cars(){
    return [...arguments];
}
console.log(cars("mahedra","scarpio", "odi"));//it is printed into array type
//above code given o/p array type ,but you want print as string see below

function bykes(){
    return [...arguments].join();
}
console.log(bykes("mahedra","scarpio", "odi"));//it is printed into string type



//5.now will learn REST PARAMETERS=============================================================
//why rest operater bcs of argumetns. some-times only we are using .so that rest opereter
function Animals(...rest){
    return rest;
}
console.log(Animals("Dog","cat","rat","goat"));



//6.now we will learn DEFAULT PARAMETERS================================================
// exaple1
function sum(a=10,b=20){
    return a+b;
}
console.log(sum(3,4))

// exaple2
function defaltparameter(name="revanth",age=20,company="stratu"){
    return {name,age,company};
}
console.log(defaltparameter("suru",10,"MNC"));



//example5
 let Arrow6=() => {
     return arguments;
 }
console.log(Arrow6("revanth","kumar"));//it will give error bcs aruments not suports the fat Arrow



//example5 see differece above code and this code
let Arrow6=(rest) => {
    return [...rest].join('');
}
console.log(Arrow6("revanth","kumar"));//it is corect bcs used rest method


//example6 , IN FAT ARROW FUNCTION CANT SUPPPORT THIS KEYWORD AND BINDING
let withThisKeyword={
    name:"sri",
    age:20,
    salay:25000,
    user:function(){
        console.log(`my name is ${this.name} and age ${this.age}and salary ${this.age}`);
    },
};
withThisKeyword.user();
//above code we calling this keyword in the normal function way , if it is arrow function this not work see

let withoutThisKeyword={
    name:"ragu",
    age:20,
    salay:25000,
    user:() => {
        console.log(`my name is ${withoutThisKeyword.name} and age ${withoutThisKeyword.age}and salary ${withoutThisKeyword.age}`);
    },
};
withoutThisKeyword.user();



