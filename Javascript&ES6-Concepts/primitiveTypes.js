//we have 6 primitive types in jvascript 
//1.String, 2.Numbers, 3.bigint, 4.boolean, 5.undefined, 6.null

//1.String ============================================================================================
var str1="iam String1";
var str2="iam String2";
var str3="iam String3";
console.log(str1);
console.log(str2);
console.log(str3);
//now check type of variable
console.log(typeof str1);//String
console.log(typeof str2);//String
console.log(typeof str3);//String

//we can wtire String by the object way
var str4=new String("i am object way String4");
console.log(str4);
//now check type of variable
console.log(typeof str4);//object
//now we will convert  str4 object type into String type by the help of valueOf() method
var str5= str4.valueOf();//here converted object to Sting by using valueOf() method
console.log(typeof str5);//Sting



//2.Number================================================================================
var num1=10;
var num2=20;
var num3=30;
console.log(num1);
console.log(num2);
console.log(num3);
//now check type of variable
console.log(typeof num1);//Number
console.log(typeof num2);//Number
console.log(typeof num3);//Number

//we can wtire Number by the object way
var num4=new Number(40);
console.log(num4);
//now check type of variable
console.log(typeof num4);//object
//now we will convert into num4 object type to Number type by the 
var num5= num4.valueOf();//here converted object to Number by using valueOf() method
console.log(typeof num5);//Number


// ==========interview quation converting number to String============
let number1=254323423;
console.log(typeof number1);//number

let convertIntoString=number1.toString()
console.log(convertIntoString);
console.log(typeof(convertIntoString));

for(let single of convertIntoString){
    console.log(single)
}


//4.Boolean====================================================================================
var boolean1=true;
console.log(boolean1);
//now check type of variable
console.log(typeof boolean1);//boolean

//we can wtire boolean by the object way
var boolean2=new Boolean(true);
console.log(boolean2);
//now check type of variable
console.log(typeof boolean2);//object
//now we will convert into boolean2 object type to Boolean type b 
var boolean3= boolean2.valueOf();//here converted object to Boolean by using valueOf() method
console.log(typeof boolean3);//boolean


//5.undefine=====================================================================================
// example1
var username;
console.log(username);
console.log(typeof username);//undefined

// example2
var firstname="revanth"; //uer 
var firstname; //not exist
if(firstname === undefined){
    document.write("user not exist");
} else{
    document.write(`welocome to ${firstname}`);
}


// 6.null====================================================================================
var jspiders=null;
console.log(jspiders);
console.log(typeof jspiders);//object actually this is called as bag still not fixed null/bag 