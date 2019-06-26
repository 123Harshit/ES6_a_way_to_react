//spread operator
//it takes an array and split it into single elements


let disp_colors = function(message , ...colors){
    console.log(message);
    for(let i in colors)
    {
        console.log(colors[i]);
    }

}

let message = "List of colors"; 

let colorsarr = ['red','green','blue'];

disp_colors(message,...colorsarr);