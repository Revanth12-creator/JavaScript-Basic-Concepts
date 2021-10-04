//Array Concept
//points
//1.Arrya is container ,use of an array it can hold multiple values into a single variavble
//2.it start with index[0]
//3.start with squres brakets[]
//4.we can insetr inside arry any type of variables
//example code
let AlltypeValues=[
    "java", //index[0]
    1000,   //index[1]
    [],     //index[2]
    true,    //index[3]
    function name() {      
        var user="revanth";  
    },                        //index[4]
    {                    
        name:"surya",
        age:20,
        salary:25000,
    },                             //index[5]
];
// console.log(AlltypeValues[0]);
// console.log(AlltypeValues[1]);
// console.log(AlltypeValues[2]);
// console.log(AlltypeValues[3]);
// console.log(AlltypeValues[4]);
// console.log(AlltypeValues[5]);
console.log(typeof AlltypeValues);//object bcs non primitive
//above we are calling every time index ,insted of that we can loop it seee below
for(i=0; i<AlltypeValues.length; i++){
    console.log(AlltypeValues[i]);
}

//=======how to check it is Array or not , using "Array.isArray() method " see below========================
console.log(Array.isArray(AlltypeValues));//it will give o/p true means it is Array


//=========now will learn converting String into Arrray see below=========================
let StringValue="iam String";
console.log(typeof StringValue)//o/p String
// now converting into Array using slipt() method
let ConvertingAyya=StringValue.split(""); 
console.log(ConvertingAyya);//o/p "i","a","m","s","t","r","n","g"
console.log(Array.isArray(ConvertingAyya));
//now we will loop it
for(i=0; i<ConvertingAyya.length; i++){
    console.log(ConvertingAyya[i]);
}


//=========now will learn converting Arrray into  String see below=============================
let Languages=["java","html","css","Javascript","react-Js"];
//now will convert Array into string using Join() method
let convertingString=Languages.join();
console.log(convertingString);
console.log(typeof convertingString);


//=========now will learn concating two arrays into sngle Arrray using concate() method see below========
let names=["revanth","ram","surya","sudha","rajesh"];
let colors=["red","green","yellow","orange","white"];
//now will concating two arrays
let NamesAndColors=names.concat(colors);
console.log(NamesAndColors);
console.log(typeof NamesAndColors);//object bcs non primitive
