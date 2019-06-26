let getVal = function(value=10,bonus=5){
    console.log(value+bonus);
}
getVal();
getVal(20);
getVal(20,30);
getVal(undefined,30);

//using arrow functions
let percent = () => 0.1 ; 
let har = function(aa = 10 , bb = aa*percent()){
    console.log(aa+bb);
}
har();