// Displaying a player's health via object properties

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var adjustedHealth = playerHealth * playerHealthMultiplayer;
    console.log(playerName + " has health " + playerHealth);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplayer: 1.2
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplayer: 1.5
};

showPlayerHealth(player1.name, player1.health, player1.healthMultiplayer);
showPlayerHealth(player2.name, player2.health, player2.healthMultiplayer);



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */