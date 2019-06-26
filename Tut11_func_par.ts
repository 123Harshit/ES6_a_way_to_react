var employee = {
    id: 1,
    greet: function(){
        var self = this;
        //setTimeout(function(){console.log(this.id)},1000);  ---> this will give "undefined" because this keyword has a functional scope
        setTimeout(function(){console.log(self.id)},1000);  //here it is correct by using a variable self 
    }
};
employee.greet();

// now if we use arrow function then -->

var employee = {
    id: 1,
    greet: function(){
        setTimeout(() => {console.log(this.id)},1000);  //here it is correct by using a variable self 
    }
};
employee.greet();
//arrow function do not create their own "this"...they always refer to parent function