// // //Array have many method see below
// // //1.unShift, 2.push, 3.pop, 4.shift, 5.splice, 6.join, 7.sort,  8.forEach, 9.Map, 10.forOF
// // //  11.concate, 12.revarse, 13.slice, 14.reduce,15.include, 16.keys, 17.values,18.Array, 19.fill,
// // //20.find, 21.findeIndex,22.tostring,23.Filter 24.indexOf 25.copyWithIn 26.every() 27.some()

// // //1.unShift===============================================================================================
// // //used to add element in the Fisrt see below 
// // let mobiles=["Vivo","MI","reame","Opp"];
// // mobiles.unshift("IPHONE");
// // // console.log(unshift);
// // console.log(mobiles)



// // //2.push===============================================================================================
// // //used to add   element in the Last see below 
// // let mobiles1=["Vivo","MI","reame","Opp"];
// // mobiles1.push("MI note 9 pro");
// // // console.log(unshift1);
// // console.log(mobiles1);



// // //3.shif===============================================================================================
// // //used to delete   element in the Fisrt see below 
// // let mobiles2=["Vivo","MI","reame","Opp","samsang"];
// // mobiles2.shift();
// // console.log(mobiles2);


// // //4.pop===============================================================================================
// // //used to delete   element in the Last see below 
// // let mobiles3=["Vivo","MI","reame","Opp","samsang"];
// // mobiles3.pop();
// // console.log(mobiles3);



// // //5.splice===============================================================================================
// // //used to Inser ,delete between  element in anywhere see below 
// // //exaple1
// // let mobiles4=["Vivo","MI","realme","Opp","samsang"];
// // mobiles4.splice(2,1);//here [2]is the index and 1 is how many elements are deleting 
// // console.log(mobiles4);//o/p realme deleted

// // //exaple2
// // let mobiles5=["Vivo","MI","Opp","samsang"];
// // mobiles5.splice(2,0,"Gelaxy");//here [2]is the index and 0 is how many elements are deleting 
// // console.log(mobiles5);//o/p not deleting adding anothe element  after index of [2]




// // //6.join()===============================================================================================
// // //used to converting array into String  see below 
// // let mobiles7=["Vivo","MI","reame","Opp","samsang"];
// // let join=mobiles7.join('');
// // console.log(join);



// // //7.sort()===============================================================================================
// // //used to sorting  into order wise  lke a,b,c,d see below 
// // //exaple1
// // let array=["d","a","e","w","b"];//if it charecteres and string no need to write any parameters 
// // let sortData=array.sort()
// // console.log(sortData);

// // //exaple2 
// // let number=[500,200,400,100,600];//if it Number we need to write 2 parameters bcs for comaparision 
// // let number1=number.sort((a,b) => {
// //     return a-b;
// // });
// // console.log(number1);



// // //8.forEach()===============================================================================================
// // //used to looping array see below 
// // let array1=[1,2,3,4,5,6,7];
// // let forEach1=array1.forEach(x => {
// //   console.log(x)
// // }
// //  );


// // //9.Map()===============================================================================================
// // //map is simillar to the foresch and it will create new array also see below 
// // let array2=[1,2,3,4,5,6,7]; 
// // let map1=array2.map(x => {
// //     return x*3;
// // });
// // console.log(array2)//it is normal array and it is not destroy
// // console.log(map1);// it is creatiing new  array 




// // //10.forOf()===============================================================================================
// // //used to looping array  easy way ES6 see below 
// // let array3=[1,2,3,4,5,6,7];
// // for(let arr of array3){
// //     console.log(arr)
// // }


// // //11.concate()===============================================================================================
// // //used to merging 2 array  see below 
// // let arr1=[1,2,3,4,5,6,7];
// // let arr2=[8,9,10,11,12,13];
// // let merge=arr1.concat(arr2)
// // console.log(merge)


// // //12.revarse()=================================this is the string method==============================================================
// // //used to revarsing string   see below 
// let message="Revanth Kumar";
// let revarseData=[...message].reverse().join("");
// console.log(revarseData)



// // //13.slice()===============================================================================================
// // //used to printing value from whare to whare u want see below 
// // let mobileData=["Vivo","MI","reame","Opp","samsang"];
// // let sliceData=mobileData.slice(1,3);//here parameters begining value and ending values
// // console.log(sliceData);



// // // entries/values() method=====================================================================================
// // //used to converting obj in Arrrayt see below 
// // let data1={
// //     num1:1,
// //     num2:2,
// //     num3:3,
// //     num4:4,
// //     num5:5,
// // };
// // let convertIntoArray1=Object.values(data1);
// // console.log(convertIntoArray1)




// // // //14.reduce()=====================================================================================
// // //used to reducing the multliple vaues into single value see below
// // // example1 
// // let data={
// //     num1:1,
// //     num2:2,
// //     num3:3,
// //     num4:4,
// //     num5:5,
// // };
// // //first convert into arry the easy to reduce bcs comparision going easy
// // let convertIntoArray=Object.values(data);
// // // console.log(convertIntoArray)
// // let Data1=convertIntoArray.reduce((x,y) => {
// //     return x+y;
// // });
// // console.log(Data1);//o/p 1,2,3,4,5 become as a single value 15

// // // example2 with help of function
// // let nubers3=[1,2,10]; 
// // let ConvertingsingleNum=nubers3.reduce(myf);

// // function myf(a,b){
// //     return a+b;
// // }
// // console.log(ConvertingsingleNum);


// // // example3 with array
// // let nubers4=[1,2,3,4];
// // let Convertingsingle=nubers4.reduce((a,b) => {
// //     return a+b;
// // });

// // console.log(Convertingsingle)


// // //15.incluade()===============================================================================================
// // //used to checks the elment is there or not  see below 
// // let mobileCompaniy=["Vivo","MI","reame","Opp","samsang"];
// // let checkData=mobileCompaniy.includes("MI");//here checks the "MI" is there or not
// // console.log(checkData);//if element is there o/p is true/false



// // //16.keys()===============================================================================================
// // //used to gives the only kesy data  see below 
// // let mobileCompaniy1=["Vivo","MI","reame","Opp","samsang"];
// // let checkData1=mobileCompaniy1.keys();
// // for(let key of checkData1) {
// //     console.log(key);// o/p is indexes 0,1,2,3,4
// // }


// // //17.values()===============================================================================================
// // //used to gives the only values data  see below 
// // let mobileCompaniy2=["Vivo","MI","reame","Opp","samsang"];
// // let checkData2=mobileCompaniy2.values();
// // for(let key of checkData2) {
// //     console.log(key);// o/p is values Vivo,MI,reame,Opp,samsang
// // }



// // //18.Array()===============================================================================================
// // //used to give range of memory  see below 
// // let arr=new Array(100);
// // console.log(arr)//o/p 100 empty memory;

 

// // //19.Fill()===============================================================================================
// // //used to FIll the data which is empty memory  see below 
// // let arr5=new Array(50);
// // let fillData=arr5.fill("Fullstack");
// // console.log(fillData)//o/p 100 empty memory;


// //20 find()method :used to finding a value or element in array or object=========================
// //example1
// // let ploples=[
// //     {
// //         name:"revanth",
// //         age:20,
// //         designation:"JavaDeveloper",
// //     },
// //     {
// //         name:"sake",
// //         age:20,
// //         designation:"webDeveloper",
// //     },
// //     {
// //         name:"Kumar",
// //         age:20,
// //         designation:"FronEndDeveloper",
// //     }, {
// //         name:"Somu",
// //         age:20,
// //         designation:"HtmlDeveloper",
// //     }
// // ];  
// // //now it will check each elenment inside the array
// // function checkElement(person){
// //     return person.designation === "FronEndDeveloper";
// // }
// // console.log(ploples.find(checkElement.name);
1


// //21findIndex()method :used to finding a value or element in array or object=========================
// //example2
// // let phones=["Vivo","MI","reame","Opp","samsang"];
// // let mobi="reame";
// // let findElement=phones.findIndex(items => {
// //     if(mobi === items){
// //         return true
// //     }
// // })
// // console.log(findElement)

// //example2
// // let Elements=["d","a","e","w","b"];
// // let indexes=Elements.findIndex(elem => {
// //     return elem === "w";
// // })
// // console.log(indexes);



// // //23.filter()method ,it is creates the new array and filled with the arrray elements//
// // //A function that accepts, up to three arguments. The filter method calls the predicate function one time for each element in the array.
// // //example

// // let array5=[10,20,30,40];
// // function chechAge(age){
// // return age>18;
// // }
// // let array6=array5.filter(chechAge)
// // console.log(array6);


// // 24.indexOf()method :used to finding a value or element in array or object=========================
// //example
// // let phonesName=["Vivo","MI","reame","Opp","samsang"];
// // let a=phonesName.indexOf("MI")
// // console.log(a);


// //25.lastIndexOf()method :used toprinting last index=========================
// //example
// // let phonesName="Revanth";
// // let a=phonesName.lastIndexOf("h");
// // console.log(a);


// //25.copyWithIn()method :used to finding a value or element in array or object=========================
// //example
// // let a=[1,2,3,4,5,6,7,8];
// // let willfilter=a.copyWithin(2,3,6);
// // console.log(willfilter);


// //26.every()method :used to check every elemetn in the given array and ====================
// //check condition every thing is true given condition ,than print true if even one is false print false=====
// //example

// // let array5=[17,20,30,40];
// // function chechAge(age){
    
// // return age>18;
// // }
// // let array6=array5.every(chechAge)
// // console.log(array6);

// //26.some()method :used to check every elemetn in the given array and 
// //check condition if any one is true also  given condition ,than print true=========================
// //example1

// // let array5=[17,16,3,18];
// // function chechAge(age){
// // return age>18;
// // }
// // let array6=array5.some(chechAge)
// // console.log(array6);

// //27.split() method 
// // let a="reavnth kumar";
// // let c=a.split();
// // console.log(c)  o/p :[ 'reavnth kumar' ]

// // let a="reavnth kumar";
// // let c=a.split(" ");
// // console.log(c)  o/p :[ 'reavnth','kuamr' ]

// let a="reavnth kumar";
// let c=a.split(',');
// console.log(c) // o/p :[ 'R','e','v','n','t','h'];


//interviwe quations
// let a=["guru","reva", "kaju"];
// let b=a.forEach(x => {
//     console.log(`${x[0].length}, ${x[2].length}, ${x[2].length}`)
// })

// let a=["guru","reva", "kau"];
// let b=a.map(x=> {
//     console.log(x.length);
// });

//interview quation
// var a=50;
// a=200;
// console.log(a)

//interview quation
var fruits="Banana Orange Apple Mango";
var reve=[...fruits].reverse().join('')

console.log(reve);