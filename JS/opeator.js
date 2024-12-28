//assignment
a = 10;
b = 20;

//arithemetic

console.log(a+b);
console.log(a-b)
console.log(a*b);
console.log(a/2);
console.log(a%2);

//unary 

console.log(++a);
console.log(a++);
console.log(a--);
console.log(--a);

//logical

if (a>=10 && b<=20){
    console.log("hi");
}

c=9;
if (a>=10 || b>=20){
    console.log("hello");
}

//relational

if(a<11){
    console.log(a);
}
if(b>10){
    console.log(b);
}
if(a>=10){
    console.log(a);
}
if(b<=15){
    console.log(b);
}
else{
    console.log("nothing");
}

if(a!=20) {
    console.log("no",a);
}
if(a==10) console.log(a);
if(a===10) console.log("yes");

if(a!=="hi")console.log("no...");

//bitwise

console.log(a&b);
console.log(a|b);
console.log(~a);
console.log(a>>10);
console.log(b<<3);

//ternary
if (a<b?console.log("first"):console.log("second"));