//classes are infact just special functions but unlike functions they are not hoisted as shown below

// let p1 = new Person();  <-- Will give an error

class Person{
    greet(){}
}

let P = new Person();
console.log(typeof Person);
console.log(P.greet === Person.prototype.greet);

employeee();
function employeee()
{

};
employeee();
console.log(typeof employeee); 


//Three  types of methods of obj creation 

class Pers{
    //Constructor Method
    constructor(name)
    {
        this.name = name;
        console.log(this.name + " constructor");
    }
    //Static Method
    static staticmethod()
    {
        console.log("Static Method");
    }
    //Prototype method
    greetPers(){
        console.log("Hello " + this.name);
    }
}
let W = new Pers("chandler");
Pers.staticmethod();
W.greetPers();

//Inherritance in Classes

class Person2{
    constructor(name){
        console.log(name + " Person Constructor");
    }
    getID(){
        return 10;
    }
}
class Emp2 extends Person2{
    constructor(name){
        super(name);
        console.log(name + " Employee constructor");
    }
    getID(){
        //return 50;
        return super.getID();
    }
}
let e = new Emp2("Chiya");

//If a method is not present in derived class then it will call the method from the parent claas otherwise it will call only from the derived class
//If a method is present in both parent and derived class and we only want to access parent class method then we've to use super key like shown above
console.log(e.getID());


//So the 'extends' keyword is used to inherrit from the parent class which is specified on the right hand side

//and the 'super' keyword is used to invoke the constructor of the parent class and super keyword is also used to get access to the methods that are defined in the parent class as shown for getID() method
