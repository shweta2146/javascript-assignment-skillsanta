// let a = document.getElementById("temp").value;
// console.log(a);
function convertCelsius(){
    let a = document.getElementById("temp").value;
    let result = (a-32) * (5/9);
    
    document.getElementById("resultp").innerHTML = `The Value is : ${result}`



}
function convertFarenheit(){
    let a = document.getElementById("temp").value;
    console.log(a);
    let result =  a*  9 / 5 + 32;
    document.getElementById("resultp").innerHTML = `The Value is : ${result}`
    console.log(result)
}
