function sumOfDigits()
{
  var n, remainder, sum = 0;
  n = parseInt(document.getElementById("number").value);
  if (n<0){
    n=n*(-1)

  while(n)
  {
    remainder = n % 10;
    sum = sum + remainder;
    n = Math.floor(n/10);
  
}
document.getElementById("sum").value = sum*(-1);
}
   else{
  while(n)
  {
    remainder = n % 10;
    sum = sum + remainder;
    n = Math.floor(n/10);
  }
  document.getElementById("sum").value = sum;
}
  }  