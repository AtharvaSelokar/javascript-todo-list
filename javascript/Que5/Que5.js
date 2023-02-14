function fib(){
  // program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(document.getElementById("seq").value);;
let n1 = 0, n2 = 1, nextTerm;

document.getElementById("result").innerHTML=('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
document.getElementById("result").innerHTML= document.getElementById("result").innerHTML+"<br>"+n1;
nextTerm = n1 + n2;
n1 = n2;
n2 = nextTerm;
}
}