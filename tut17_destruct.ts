let Employee = ["Chandler", "Bing", "male"];

let [fname, lname ,gender] = Employee;
let [Fname, ...elements] = Employee;

console.log("#####################");
console.log(fname);
console.log(lname);
console.log(gender);

console.log("#####################");
console.log(elements);



let student = ["Chiya", "Harshit", "Pradeep"];
let [, , subject3] = student;

console.log("#####################");
let[sub1, sub2, sub3, sub4] = student;
console.log(subject3);

console.log("#####################");
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);

