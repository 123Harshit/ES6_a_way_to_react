//A set can only contain unique values
let mySet2 = new Set();
mySet2.add("Hello");
mySet2.add(1);
//mySet2.add(1);  --> Size remains the same
console.log(mySet2.size);

//Array Declaration
let newset = new Set([1,2,3,4,3,4]);
console.log(newset.size);
console.log(newset);

let myset3 = new Set().add("HELLO").add("WORLD");
console.log(myset3.size);
console.log(myset3);

//to check the existence of a value in a set
console.log(mySet2.has(1));
console.log(mySet2.has(5));
//to delete an element from a set
myset3.delete(3);
console.log(myset3.size);
console.log(myset3.has("HELLO"));


//////////////////////////////////////////////////////////
//Weak Sets
    
let set = new WeakSet();
let key = {}
set.add(key);
console.log(set.has(key));
key = null;
console.log(set.has(key));