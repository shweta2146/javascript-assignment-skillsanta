
function strip_tags(a){

if(a != null || a!= ""){
    a = a.toString();
    a = a.replace( /(<([^>]+)>)/ig, '')
    return a
}
}