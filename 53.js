console.log("this is js file");

function greet(name,greetText="greeting from javascript"){
    console.log(greetText+" "+name);
    console.log(name+" is a good boy");
}

function sum(a,b,c){
    let d=a+b+c;
    return d;
}

let name="shahziab";
let name1="ali";
let name2="harry";
let greetText1="Good morning";
greet(name,greetText1);
greet(name1,greetText1);
greet(name2);

let return1=sum(1,2,3);
console.log(return1);