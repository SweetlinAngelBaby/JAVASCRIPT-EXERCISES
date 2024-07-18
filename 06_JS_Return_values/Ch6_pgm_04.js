var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

// 1) Sum of a different pair of numbers
var differentSum = add(15, 35);
console.log(differentSum); // This will display 50

// 2) Display 'The sum of 50 and 23 is 73'
var sum = add(50, 23);
console.log("The sum of 50 and 23 is " + sum); // This will display 'The sum of 50 and 23 is 73'

// 3) Use the add function to add more than two numbers
var sumOfThree = add(add(10, 20), 30);
console.log(sumOfThree); // This will display 60

// 4) Create a function to return the sum of three numbers
var addThree;

addThree = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sumOfThreeNumbers = addThree(10, 20, 30);
console.log("The sum of 10, 20, and 30 is " + sumOfThreeNumbers); // This will display 'The sum of 10, 20, and 30 is 60'

/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */