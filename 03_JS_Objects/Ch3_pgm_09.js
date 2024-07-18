// Concatenating string properties

var book1;
var book2;
var book3;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
	published : 1937
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
	published : 1947
};

book3 = {
	title: "Pride and prejudice",
	author: "Jane Austen",
	published : 1957
};


console.log(book1.title + " by " + book1.author + "published on " + book1.published);

console.log(book1.title + " by " + book2.author + "published on " + book2.published);

console.log(book1.title + " by " + book3.author + "published on " + book3.published);




/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */