console.log("=====variable======");
var text="mayank mishra";
console.log(text);

let a=9;
let b=4;

if (a>b){
    console.log("A is grrater , value of A=",a);
    
}
else{
    console.log("b is greater than , value of B = ",b);
    
}
function AbstractRange(){
    console.log("welcome students");
    console.log("welcome to node.js")
    

}
AbstractRange();
function great( fname, lname){
    console.log("hello", fname,lname);    
}
great("utkarsh","Dixit");
great("Waseem","sir");


function add(X,Y){
    return X+Y;
}
var result =add(20,10);
console.log("sum=",result);


function fullname(fname="abes" , lname="eng college"){
    return fname+" "+ lname;
}

console.log(fullname());
console.log(fullname("utkarsh","dixit"));

function totalmarks(maths, english,science){
    return maths + english + science ;
}
function percentage(total){
    retrun (total/300)*100;
}
var total=totalmarks(90,99,89);
console.log(total);
let i=0;
while(i<=10){
    console.log(i);
    i++
    
}