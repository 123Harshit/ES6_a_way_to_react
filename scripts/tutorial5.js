/*function *createGenerator(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
  }
  
  let myGen = createGenerator();
  
  console.log(myGen.next());
  console.log(myGen.next());
  console.log(myGen.next());*/
  let person = {
    fname: "Chandler",
    lname: "Bing",
    age: 20
};

person[Symbol.iterator] = function(){
let properties = Object.keys(person);
let count = 0;
let isDone = false;
let next = () => {
    if(count>=properties.length){
        isDone = true;
    }
    return{done: isDone, value: this[properties[count++]]};
}
return {next};
    
};
for (let p of person){
    console.log(p);
}
