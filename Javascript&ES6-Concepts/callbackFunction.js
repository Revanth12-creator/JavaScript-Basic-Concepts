//CALLBACK FUNCTION
//its most importent concept entair Javascript
//points
//1.a function name paasing as a parameters to anthor functiom called callback function see below

//example1

function student1(revanth){
   return revanth();
} //here function name is student1 
student1(function(){
    console.log("Return function");
});

//example2
function user(){
    console.log("iam user function");
}
function student(){
}
student(user);//here user()is functio passing as a argumet to the anothe funstion


//good example3
function custemer1(BarrarrCallback){
    console.log('iam  customer1 order  food to a bararr');
    BarrarrCallback();
}

function custemer2(BarrarrCallback){
    console.log('iam  customer2 order  food to a bararr');
    BarrarrCallback();
}

function custemer3(BarrarrCallback){
    console.log('iam  customer3 order  food to a bararr');
    BarrarrCallback();
}
//now write CALLBACK FUNCTION
function BarrarrCallback(){
    console.log("iam taking 3 customer orders and delivared ordeers");
}
BarrarrCallback();

