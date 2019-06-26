//rest operator
//it converts all the arguements of a function into an array


/*
let disp_colors = function(){
    console.log(message);

    for(let i in arguments)
    {
        console.log(arguments[i]);
    }
}

let message = "List of Colors";
disp_colors(message,'red');
disp_colors(message,'red','blue');
disp_colors(message,'red','blue','green');
*/

let disp_colrs = function(mssage , ...colors){
    console.log(message);
    console.log(colors);
    console.log(colors.length);
    for(let i in colors)
    {
        console.log(colors[i]);
    }
}

let mssage = "List of Colors";
disp_colrs(mssage,'red');
disp_colrs(mssage,'red','blue');
disp_colrs(mssage,'red','blue','green');
