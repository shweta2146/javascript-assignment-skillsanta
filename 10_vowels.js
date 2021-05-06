let a = prompt("Enter any string")
let countA = parseInt(0);
let countE = parseInt(0);
let countI = parseInt(0);
let countO = parseInt(0);
let countU = parseInt(0);


for(i = 0 ; i < a.length ; i ++){
    
    if(a[i] == 'a'){
        countA +=1;
    }
    else if(a[i] == 'e'){
        countE +=1;
    }
    else if(a[i] == 'i'){
        countI +=1;
    }
    else if(a[i] == 'o'){
        countO +=1;
    }
    else if(a[i] == 'u'){
        countU +=1;
    }
}
if(countA!=0){
    document.write(`A: ${countA}`)

    document.write("<br>")

}
if(countE!=0){
    document.write(`E: ${countE}`)

    document.write("<br>")

}
if(countI!=0){
    document.write(`I: ${countI}`)

    document.write("<br>")

}
if(countO!=0){
    document.write(`O: ${countO}`)

    document.write("<br>")

}
if(countU!=0){
    document.write(`U: ${countU}`)

    document.write("<br>")

}