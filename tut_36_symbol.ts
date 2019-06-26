let s = Symbol("My symbol");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("test");
let s3 = Symbol("test");
console.log(s2 === s3); //both symbols have different ids does not matter what the description is (in the bracket)

let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');
console.log(s4===s5);
console.log(Symbol.keyFor(s5));

    let fName = Symbol("FirstName");
    let pErson = {
        [fName] : "Chandler"
    };

    console.log(Object.getOwnPropertyNames(pErson));
    console.log(Object.getOwnPropertySymbols(pErson));
    console.log(person[fName]);
    