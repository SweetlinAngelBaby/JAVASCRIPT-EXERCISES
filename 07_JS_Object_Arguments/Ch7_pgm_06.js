// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

console.log("Testing line function:");
console.log(line(30));
console.log(line(40));
console.log(line(50));

console.log("\nTesting line lengths from -20 to 60 in steps of 10:");
for (var length = -20; length <= 60; length += 10) {
  console.log(line(length));
}

var spaces = function (spaceLength) {
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return " ".repeat(spaceLength);
};

console.log("\nTesting spaces function:");
console.log(spaces(15)); // Test spaces function with length 15

var emptyBox = function (boxWidth) {
  boxWidth = Math.max(0, boxWidth);
  boxWidth = Math.min(40, boxWidth);
  var topBottomLine = "=" + "=".repeat(boxWidth - 2) + "=";
  var middleLine = "=" + spaces(boxWidth - 2) + "=";
  
  console.log("\nTesting emptyBox function:");
  console.log(topBottomLine);
  for (var i = 0; i < 3; i++) {
      console.log(middleLine);
  }
  console.log(topBottomLine);
};

emptyBox(12); // Test emptyBox function with width 12

  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */