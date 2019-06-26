let myset = Object.create(null);
myset.id = true; //1 or 0 if not exists
if(myset.id)
{console.log("id exists");  }


let mymap = Object.create(null);
mymap.name = "Chandler";
let val = mymap.name;
console.log(val);

mymap[100] = "Hello";
console.log(mymap["100"]);

let ob1 = {};
let ob2 = {};

mymap[ob1] = "Hello world";
console.log(mymap[ob2]);

console.log(ob1.toString());
console.log(ob2.toString());