let a = parseInt(prompt("Enter First Number"));
let b = parseInt(prompt("Enter Second Number"));
let c = parseInt(prompt("Enter Third Number"));

if(a > b && a > c){
    document.write(`${a} is largest among all`);
}
else if(b > a && b > c){
    document.write(`${b} is largest among all`);
}
else if(c > a  && c > b ){
    document.write(`${c} is largest among all`);
}