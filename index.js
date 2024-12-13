//Importing necessary modules
const readline = require("readline");

// Create an interface for interacting with the user
const rl = readline.createInterface({
  input: process.stdin,
  // process.stdin refers to the standard input stream in Node.js, which is typically the terminal or console where the user types their input.
  // When you pass process.stdin to input, it tells the program to listen for input from the terminal.
  output: process.stdout,
  // process.stdout refers to the standard output stream in Node.js, which is where data is printed (usually the terminal or console).
  // By passing process.stdout to output, it allows the program to display messages in the terminal.
});

console.log("\nWelcome To Calculator 101");

// Getting user input using the 'question' method
rl.question("Please enter 'Hello World!': ", (answer) => {
  console.log(`You said, ${answer}`);
  console.log("I say, GoodBye!!!!\n");
  rl.close();
});
