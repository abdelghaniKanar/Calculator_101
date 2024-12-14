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

controlPanel();

function addition(x, y) {
  console.log(`${x} + ${y} = `, x + y);
  controlPanel();
}

function subtraction(x, y) {
  console.log(`${x} - ${y} = `, x - y);
  controlPanel();
}

function multiplication(x, y) {
  console.log(`${x} * ${y} = `, x * y);
  controlPanel();
}

function controlPanel() {
  console.log("\nChoose Number: ");
  console.log("1. For Addition (+)");
  console.log("2. For Subtraction (-)");
  console.log("3. For Multiplication (*)");
  console.log("4. For Division (/)");
  console.log("5. For Exponentiation (^)");
  console.log("6. For Square Root (√)");
  console.log("7. For Factorial (!)");
  console.log("8. For Getting Out Of The 101");
  // Getting user input using the 'question' method
  rl.question("\nPlease enter the number of your choice: ", (choice) => {
    switch (choice) {
      case "1":
        // Addition Operation
        console.log("\nYou choose to perform addition operation!");
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);
            addition(x, y);
          });
        });
        break;
      case "2":
        // Subtraction Operation
        console.log("\nYou choose to perform subtraction operation!");
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);
            subtraction(x, y);
          });
        });
        break;
      case "3":
        // Multiplication Operation
        console.log("\nYou choose to perform multiplication operation!");
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);
            multiplication(x, y);
          });
        });
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      case "8":
        rl.close();
        break;
    }
  });
}
