var getRegvalue = function(){
    return 10;
}
console.log(getRegvalue());
const getArrowvalue  = () => {
    return 10;
}
console.log(getArrowvalue());
const getArrowvalue2  = (m) => {
    return 10*m;
}
console.log(getArrowvalue2(4));
let getArrowvalue3  = (m,bonus) => {
    return 10*m+bonus;
}

console.log(getArrowvalue3(4,50));
console.log(typeof getArrowvalue);
console.log(typeof getArrowvalue2);
console.log(typeof getArrowvalue3);

//we can also remove this return

getArrowvalue3  = (m,bonus) => 10*m+bonus
console.log(getArrowvalue3(5,50));
