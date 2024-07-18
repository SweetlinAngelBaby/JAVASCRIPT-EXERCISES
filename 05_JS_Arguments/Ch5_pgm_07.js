// Displaying a player's name

var showPlayerName;

showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName);
    console.log(playerName + " has " + playerName.length + " letters.");
};

showPlayerName("Kandra");
showPlayerName("Dax");
showPlayerName("Alex");

/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * Strings have a length property that gives
 * the number of characters in the string.
 * e.g. playerName.length.
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */