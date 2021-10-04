// // //object litarals
// // //it can store any values but int should be key:value 

// // //example code 1==================================================================
// let EmployeeDetails={
//     //key  : value
//     name:"revanth",
//     age :23,
//     company:"Stratap",
//     salary:22000,
// }
// console.log(EmployeeDetails);
// console.log(EmployeeDetails.name);
// console.log(EmployeeDetails.age);
// console.log(EmployeeDetails.company);
// console.log(EmployeeDetails.salary);


// //example code 1==================================================================
// let EmployeeDetails1={
//     Team1:
//     {
//     name:"revanth kumar",
//     age :20,
//     company:"Stratap",
//     salary:25000,
//     },
//     Team2:
//     {
//     name:"ram",
//     age :23,
//     company:"Stratap",
//     salary:26000,
//     },Team3:
//     {
//     name:"rajesh",
//     age :22,
//     company:"Stratap",
//     salary:22000,
//     }
// };
// console.log(EmployeeDetails1);//all details
// console.log(EmployeeDetails1.Team1.name);//particular means team1 name
// console.log(EmployeeDetails1.Team2.name);//particular means team2 name
// console.log(EmployeeDetails1.Team3.name);//particular means team3 name



// //2.we can write objects constractor way also but this is no one follows all are only objects litarals waysee below
// let users=new Object();
// users.name="revanth";
// users.age=50;
// users.salary=30000;
// console.log(users);
// console.log(typeof users);


// //3.now we will learn copying the object key values without writing again key values using create() method
// //object have a method create() 
// let student={
//     name:"sri",
//     age:20,
//     salary:10000,
// } ;
// // now we will copy above object key without writing second time using create() method  and 
// //continue creating objects with the objects.create() method

// let copyig=Object.create(student);
// copyig.name="ramana";
// copyig.age=22;
// copyig.salary=56655;
// console.log(student);
// console.log(copyig);


// //4.how to override/update exsting value into new value using object KEY see below===================
// //example1
// let movie={
//     name:"Bahubali",
//     hero:"prabas",
//     vilan:"kalakeya",
//     "fdfk-gggg":"dnjdjj"
// };
// //now ovwride with key
// movie.name="Saho";
// console.log(movie);


// //example2
// let mobiles={
//     prize:[10000,20000,30000]//old
// }
// mobiles.prize=[10,20,30];//new
// console.log(mobiles);


// //example3
// let dog={
//     action:["barking","swimming","eating"]//old
// };
// dog.action="dog will  barking and eating and swimming ";//new here totally checged array into string
// console.log(dog);
//  //above all example1,2,3 are  not protected we are easily overriding ,if want protect use freze() method


// //4.1 example protecting now 
// let ATM={
//     money:[100,200,3000]
// };
// let protectAllExample3=Object.freeze(ATM);// protected ,if you want overide remove this line
// //now try to overide o/p error see
// ATM.money="change money";//not changed
// console.log(ATM);



// //5.now will learn "_" (iphan)==================================================================
// //when we are using -,we should use '' cots see below
// let styles={
//     body_clor:"red",
//     div_clor:"green",
//     para_clor:"yellow",
// }
// console.log(styles);//it will give o/p correct 

// let styles1={
//     'body-clor':"red",
//     'div-clor':"green",
//     'para-clor':"yellow",
// }
// console.log(styles1);//this also corrct 
// //above when we are using - symbol we should use ''(cotes) like 'body-clor'




// //6.we Will write inside an object only key ,it will work correctly see below================
// let Alltypes={
//     strig:"iam revanth",
//     number:10,
//     charecter:"A",
//     array:["1","hai",5,],
//     users() {
//        var msg="iam the only key";
//    },
// };
// console.log(Alltypes);
// console.log(Alltypes.users);



//6.diplay all data into broser see below================
let EmpDetails2=[
    {
    name:"revanth kumar",
    age :20,
    company:"Stratap",
    salary:25000,
    },
    {
    name:"ram",
    age :23,
    company:"Stratap",
    salary:26000,
    },
    {
    name:"rajesh",
    age :22,
    company:"Stratap",
    salary:22000,
    },
    {
        name:"sam",
        age :22,
        company:"Stratap",
        salary:22000,
    },
    {
        name:"jam",
        age :22,
        company:"Stratap",
        salary:22000,
     },
];

let output="";

EmpDetails2.forEach((emp) => {
     output +=`
    <div>
    <h1>Employee_name :${emp.name}<h1>
    <p>Employee_age :${emp.age}<p>
    <p>Employee_Company :${emp.company}<p>
    <p>Employee_Salary :${emp.salary}<p>
    <p>------------------</p>
    </div>`;
    document.getElementById("template").innerHTML=output;
});


