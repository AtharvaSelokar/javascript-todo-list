function bucket(){


var b = parseInt(document.getElementById("b").value);

var m = parseInt(document.getElementById("m").value);

let p = b%m;
let q= b/m;

document.getElementById("mod1").value = p;
document.getElementById("rem1").value =parseInt(q)  ;

}