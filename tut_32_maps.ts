let myMap = new Map();
myMap.set("fname","Chandler");
myMap.set("age",30);

console.log(myMap.get("fname"));

let Ob1 = {};
let Ob2 = {};
myMap.set(Ob1,10);
myMap.set(Ob2,20);
console.log(myMap.get(Ob1));
console.log(myMap.size);
console.log(myMap.has("fname"));

myMap.delete("fname");
console.log(myMap.size);
console.log(myMap.has("fname"));

myMap.clear();
console.log(myMap.size);

//Scratch js part
/*
console.log("Joo");
let myMap = new Map([["fname","Chandler"],
                     ["lname","Bing"]]);


for(let entry in myMap.entries())
  {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }

for(let [key,value] in myMap.entries())
  {
    console.log(`${key} -> ${value}`);
  }

for(let value in myMap.values())
  {
    console.log(value);
  }

for(let key in myMap.keys())
  {
    console.log(key);
  } 

//forEach 

let myMap = new Map([["fname","Chandler"],
                     ["lname","Bing"]]);
myMap.forEach(mapFunction);
function mapFunction(value,key,callingMap){
  console.log(key+" "+value);
  console.log(myMap === callingMap);
} 

let mySet = new Set([1,2,3]);
mySet.forEach(setFunction);
function setFunction(value,key,callingSet){
  console.log(key+" "+value);
  console.log(mySet === callingSet);
}

//Weak maps
let myMap = new WeakMap();
let ob1 = {};
myMap.set(ob1,"Hello World");
console.log(myMap.get(ob1));
console.log(myMap.has(ob1));
ob1 = null;
console.log(myMap.has(ob1));

*/ 