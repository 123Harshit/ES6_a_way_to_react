let firstname = "Harshit";
let lastname = "Singhal";
let person = {firstname , lastname};
console.log(person.firstname);
console.log(person.lastname);

function createperson(firstname,lastname,age){
    let fullname = firstname + " " + lastname;
    return {
        fullname,
        firstname,
        lastname,
        isSenior : function(){          //  isSenio(){
            return age>60;              //        return age>60;
        }                               //      }
    }
}
let per = createperson("Anju" , "Devi", 62);
console.log(per.fullname);
console.log(per.firstname);
console.log(per.lastname);
console.log(per.isSenior());


// In es6, we can have spaces between object properties, it has different following syntax
// We can also use vaiables name for object property; as: ln in example below

let ln = "Last name";
let persons = {
    "first name" : "Harshit" ,
    [ln] : "singhal"
}
console.log(persons);