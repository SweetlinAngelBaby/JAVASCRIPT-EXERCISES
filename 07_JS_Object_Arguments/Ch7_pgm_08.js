// Finding substrings

var message = "We choose to go to the Moon!";

console.log("1) " + message.substring(19));   // Logs "Moon!"
console.log("2) " + message.substring(11, 6)); // Logs "go to the"
console.log("3) " + message.substring(0, 10)); // Logs "We choose"

console.log("\nWhat happens if you omit the second argument:");
console.log("4) " + message.substring(19)); // Logs "Moon!"

console.log("\nUsing negative numbers as arguments:");
console.log("5) " + message.substring(-5));    // Logs "Moon!"
console.log("6) " + message.substring(-12, 6)); // Logs "go to the"
console.log("7) " + message.substring(-23, 10)); // Logs "We choose"




/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */