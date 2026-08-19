let str="wlecome to jungle";
str.toUpperCase();
console.log(str);
console.log(str.toLowerCase());

// 3.charAt
console.log("3 character is: ",str.charAt(4) );

// 4.last  index 
let java="javascript";
console.log("last index of java : ",str.indexOf(java));


//


let mssg="java script";
console.log(
    "last index ",mssg.lastIndexOf("java script")
);
//split
let data="html , css , java";
let result=data.split(",");
console.log("split",data);


// replace 
let text="i love java";

console.log(
    text.replace("java", "java script"));



let name="Mayank";
console.log(name.includes("Mayank"));

//shift and unshift 
console.log("====array methods====");


// dates 
let date=new Date();
console.log(date);
//year 
console.log("year",date.getFullYear());
console.log("month",date.getMonth());
console.log("date0",date.getDate());
console.log("time",date.getHours(),":",date.getMinutes());


let arr=[1,2,3,4,5,6];
console.log("min",Math.min(1,2,3,4,5,6));
console.log("max",Math.max(1,2,3,4,5,6));

console.log("--------");

console.log("min", Math.min(...arr));
console.log("max", Math.max(...arr));
//round
console.log("round",Math.round(5.6));

