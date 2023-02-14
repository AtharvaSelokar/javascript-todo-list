// program to display fibonacci sequence using recursion
function fibo() {
    let num = parseInt(document.getElementById("seq").value);


    function fib() {
        function fibonacci(num) {
            if (num < 2) {
                return num;
            }
            else {
                return fibonacci(num - 1) + fibonacci(num - 2);
            }
        }

        // take nth term input from the user

        if (n <= 0) {
            alert("Enter a positive integer.")
        }
        else {
            for (let i = 0; i < num; i++) {
                document.getElementById("fib").innerHTML=document.getElementById("fib").innerHTML+fibonacci(i) + "<br> ";
            }
        }
    }
}