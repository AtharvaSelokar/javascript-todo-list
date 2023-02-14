function countOccurrences() {
  // Get the input string
  var input = document.getElementById("input").value;
  
  // Initialize an object to store the count of each character
  var count = {};
  
  // Iterate through each character in the string
  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  
  // Convert the count object to an array of strings
  var result = [];
  for (var char in count) {
    result.push(char + ": " + count[char]);
  }
  
  // Display the result
  document.getElementById("result").innerHTML = result.join("<br>");
}