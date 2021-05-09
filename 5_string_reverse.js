let str = prompt("Enter a string");
let strrev = "";
let isPalindrome = "";

for(var i = str.length -1 ; i>=0; i --){
    // console.log(str[i]);
    strrev += str[i] 

}
if(str == strrev){
    isPalindrome = "palindrome"
}
else {
    isPalindrome = "is not palindrome"
}
document.write(`The reverse of string ${str} is ${strrev} and it is ${isPalindrome}`)