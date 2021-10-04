//Spread operator---merging values
//Set Operetor---remove valuses
//points
//spread operator used to combining multiple Arrays
//Faturs
//1.combine multiple Arrays  [...a,...b'...c]
//2.spred operator converts anything into  to Array using [...names] like string ,object...etc
//3.we can add new valuse into an arrya with the help of Spread 
//4.the spread operator used to revarsing the string also
//example
//1.combine multiple Arrays  [...a,...b'...c]===========================
let names=["revanth","ram","surya","sudha","rajesh"];
let colors=["red","green","yellow","orange","white"];
let Languages=["java","html","css","Javascript","react-Js"];
//now will merge 3 arrays into a single Array
let AllArray=[...names,...colors,...Languages];
console.log(AllArray);
console.log( typeof AllArray);
console.log(Array.isArray(AllArray));


//2.convert String to Array using [...names]===============================================
let Jspiders="iam learning Fullstack Course in Jspiders At Banglure Btm";
//now will convert into Array using[...]
convertingArray=[...Jspiders];
console.log(convertingArray);
console.log( typeof convertingArray);
console.log(Array.isArray(convertingArray));//true it is arry



//3.1 now will learn SET() opreator,it will removes the doplicats each charecter which are repeted see below
// let Qspiders="iam learning Fullstack Course in Jspiders At Banglure Btm";
let name1="reeerrvvvd";
let removeDuplicates= new Set(name1); //===it is wrong bcs it is removing only words see in 3.2======prending========
console.log(removeDuplicates);
console.log(typeof removeDuplicates);//object  



//3.2 now will learn Set removing duplicats Words ,it will removes the doplicats which are repeted wordssee below
let courses=["java","html","html","java","react-Js"];
//first convert into Set
let removeRepetedWords=new Set(courses);
console.log(removeRepetedWords);
console.log(removeRepetedWords);


//3.now will learn adding values into Array=============================
let user=["revanth","kumar","surya"];
let companies=["wipro","capjemini","TCS"];
user[3]="ram";//this is javascript way
console.log(user);

//now do learn ES6 way
let add=[...user,"sambha","uday"];//ES6 way
let addboth=[...user,"guru","simha",...companies,]
console.log(add);
let details="iam revanth kumar";//this is string 
let convetSting=details.split(" ");//converted into array
let addthree=[...user,"guru","simha",30,40,50,...companies,...convetSting];//then here add all three arrays
console.log(addthree);



//4.the spread operator used to revarsing the string also================================

//first learn old thing revaesing string
let word="FULLSTACK";
//first convert into array
let convetWordintoArray=[...word];
//now revarsing array
let revarsingArrya=convetWordintoArray.reverse().join("");
console.log(revarsingArrya);
//above code taken two lines bes String no methods Array only have revarse() method lines see below new way

//now  learn new way  revaesing string
let name="REVANTH KUMAR";
let revasetheString=[...name].reverse().join("");//here taken only one line
console.log(name);
console.log(revasetheString);


// let a="Revanth";
// let b=[...a];
// console.log(b[2]);



//Reversing letter
let a=["r","e","v","a","n","t","h"];
let b=a.sort();
console.log(b);


//Reversing words
let name3="REVANTH KUMAR";
let name4=name3.split(' ');
console.log(name4)

let name5=name4.reverse();
console.log(name5)
