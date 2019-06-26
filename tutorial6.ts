function greetperson(name) {
    if (name === "Chandan") {
        var person = "Hello Chandan";
    }
    else {
        var person = "Hi there";
    }
    console.log(person);
}
greetperson("Chandan");
//# sourceMappingURL=tutorial5.js.map

// functional scope of variable declaration by var
//block scope of variable declaration by let (next example)
var a = 1 ;
var b = 2 ;
if(a===1)
{
    var a=10;
    let b=20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

let c=1;
console.log(c);
if(b===2)
{
    let c=2;
    console.log(c);
}
//it is correct
//we can't redeclare a let keyword in same block
var d=23;
console.log(d);
var d = 32;
console.log(d);
//but we can redeclare a keyword by using var 