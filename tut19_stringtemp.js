let user = "Pradeep Singhal";

let greet = "Welcome "+ user + " to ES2015";
console.log(greet);

//We can print multiple lines in different different lines and with white spaces  
let greet2 = `Welcome ${user} to ES2015
                How are you
                    Good
                I am fine 
                        Good to go`;
let greet3 = `Welcome  'Harshit' "and" '${user}' to ES2015`;
// ` -> Character present on the key below the esc key and above the tab key
console.log(greet2);
console.log(greet3);