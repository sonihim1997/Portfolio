// alert("Welcome To First Home Page")
// confirm("Hey Buddy !!")
// prompt("Firstname =")


  // Arithmetic Operators//
// console.log(5+6,"This Is My Sum");

// Relational Operators//
// console.log(5<6);
// console.log(5>6);
// console.log(5<=6);
// console.log(5>=6);
// console.log(5&&6);
// console.log(5*6);
// console.log(5/6);
// console.log(5%6);
// console.log(6==6);
// console.log(6===6);
// Logical Operators //

// &&(AND) , ||(OR) //

// console.log(10>2 || 40>20);
// console.log(true && true);
// console.log("Hello World");


// var fruits={
// name: "Mango",
// season: "Summer"
// }
// console.log(fruits.name);
// var names = ["Himanshu",2,[1,2],{key:"Hi",value:"Hello"}]

// var fruits = {name:"guava"}
// console.log(names[3]);
var name = "   Himanshu  ";
var surname =  "Soni"
var dob =[1,8,0,5,1,9,9,7]
console.log(name.startsWith("Himanshu",'startwith'));
// console.log(name.endsWith("u",'endwith'));
console.log(name.replace("Himanshu",'Chintu'),'Replace String');
console.log(name.toLowerCase());
console.log(surname.toUpperCase());
console.log(name.includes("m"));
console.log(name.indexOf("a"));
console.log(name.lastIndexOf("u"));
console.log(name.length,("length of Name"));
console.log(name.concat(surname),'concatination');
console.log(name,surname);
console.log(name.slice(0,5));
console.log(name.split(""))
console.log(name.substring(0,6),'substring is inbuilt method');
console.log(name.trim(),'Trimming The Text');
console.log(name.search('m','Searching')); //Last Index Search
console.log(dob.reverse(),'Reverse String');
   //Number
   var num =12.563;
   console.log(num.toPrecision(2),'Roundoff');
   console.log(num.toFixed(3));
     // Object
     var fruits={
      name:'Guava',
      Season:'Winter',
     }
     var newFruits={}
     console.log(Object.keys(fruits),"keys");
     console.log(Object.values(fruits),'keys');
     console.log(Object.entries(fruits),'entire Object');
     console.log(Object.assign(newFruits,fruits),"Assigning To New Object");
     

     //Dom => Document Object Model
     let x=10;
     y=15;
     console.log(x!=y);
     console.log(x!==y);
