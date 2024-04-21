// Question no 1   Declare a variable

let greeting = 'Hello world';
console.log('greeting=', greeting);

// Question no 2  Basic math

let n1 = 10;
let n2 = 15;
// addition
console.log('Addition of n1 and n2:',n1+n2);
// division
console.log('Division of n1 and n2:',n1/n2);
// product
console.log('product of n1 and n2:',n1*n2);
// quotient
console.log('Quotient of n1 and n2:',n1**n2);

// Question no 3 
// Swap the values

let a = 1;
let b = 2;

[a,b] = [b,a]

console.log('After Swapping a=',a);
console.log('After Swapping b=',b);

// Question no 4  trying to change annotation type

let trystringintonumbertype ='hello';
//trystringintonumbertype= 10 error, this is not possible that we can create a string variable and try changing its type.

// Question no 5  Modulus operator

let num1= 15;
let num2= 12;
console.log('Modulus operator:',num1%num2);

// Question no 6 incrementing the values by two methods

let counter= 34;
counter++;
console.log('counter first increment=',counter);
counter+=1;
console.log('counter second increment=',counter);

// Question no 7  Logical gates

let a1 = true;
let b1 = true;
let c1 = false;

// Andgate

let andgate = a1 && b1;  
console.log('andgate output 1=',andgate);
let andgate1 = b1 && a1;
console.log('andgate output 2=',andgate1);
let andgate2 = a1 && c1;
console.log('andgate output 3=',andgate2);
let andgate3 = b1 && c1;
console.log('andgate output 4=',andgate3);

// ORgate

let orgate = a1 || c1;
console.log('orgate output 1=',orgate);
let orgate1 = a1 || b1;
console.log('orgate output 2=',orgate1);
let orgate2 = b1 || c1;
console.log('orgate output 3=',orgate2);
let orgate3 = b1 || a1;
console.log('orgate output 4=',orgate3);

// Notgate

let notgate = !a1
console.log('notgate output 1=',notgate);
let notgate1 = !b1
console.log('notgate output 2=', notgate1);
let notgate2 = !c1
console.log('notgate output 3=', notgate2);

// Question no 8  Compound Assignment

let num = 15;
// Addition in num
num+= 15;
console.log('Addition of num:',num);
// Subtraction in num
num-= 5;
console.log('Subtraction of num:',num);
//  Multipication in num
num*= 10;
console.log('Multipication of num:',num);
//  Division in num
num/= 2;
console.log('Division of num:',num);

// Question no 9  Even and Odd

 let no = 4;
 let result = no% 2;
 if(result==0)   
 {
console.log('even');
 }else{
    console.log('odd');
 }


// Question no 10 voting Eligibility


let ageforvote = 18;
if(ageforvote>=18)
{
   console.log('18 years old=','eligible for vote ');
}else{
   console.log('less than 18 years old=','Not eligible for vote ');
}

// Question no 11  Grading system

let score = 100;
if(score>=85)
   {
   console.log('Grade A')
   }else if(score>=75)
      {
      console.log('Grade B')
   }else if(score>=65)
      {
      console.log('Grade c')
   }else if(score>=50)
      {
      console.log('Grade D')
   }else{
      console.log('Grade F')
   }
   

// Question no 12  Max of three

let x1 = 13;
let y1 = 14;
let z1 = 15;

if (x1 >= y1 && x1 >= z1) {
    console.log("x is the largest:", x1);
} else if (y1 >= x1 && y1 >= z1) {
    console.log("y is the largest:", y1);
} else {
    console.log("z is the largest:", z1);
}


// Question no 13  Check the leap year

let year= 2024;

if(year%100!=0 && year%4==0 || year%400===0) {
   console.log(`${year} is leap year`)
}else{
   console.log(`${year} is not leap year`)
}

// Question no 14 fahrnheit to celsius

let fahrenheit = 68; 

if(fahrenheit=68){
    console.log("fahrenheit 68 into celsius is:",20)
}

// Question no 15  check the number is positive, negative or zero 

let number =6;
if(number>0){
   console.log('This number is positive')
}else if(number<0){
   console.log('This number is negative')
}else {
   console.log('This number is zero')
}

// Question no 16 Multipication table

let table= 12;

console.log("12*1:", 12*1);
console.log("12*2:", 12*2);
console.log("12*3:", 12*3);
console.log("12*4:", 12*4);
console.log("12*5:", 12*5);
console.log("12*6:", 12*6);
console.log("12*7:", 12*7);
console.log("12*8:", 12*8);
console.log("12*9:", 12*9);
console.log("12*10:", 12*10);
