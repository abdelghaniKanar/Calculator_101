//Importing necessary modules
const readline = require("readline");
// Import the exported object from support.js
const CalculatorSupport = require("./support");

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

// Main function: Control Panel for the 101 Calculator
function controlPanel() {
  console.log("\nControl Panel: ");
  console.log("1. For Addition (+)");
  console.log("2. For Subtraction (-)");
  console.log("3. For Multiplication (*)");
  console.log("4. For Division (/)");
  console.log("5. For Exponentiation (^)");
  console.log("6. For Square Root (√)");
  console.log("7. For Factorial (!)");
  console.log("8. For Getting Out Of The 101");
  // Getting user choice
  rl.question("\nPlease enter the number of your choice: ", (choice) => {
    switch (choice) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        // Controlling Operations with two numbers (+, -, *, /, ^)
        // Providing titles
        switch (choice) {
          case "1":
            console.log("\nYou chose to perform addition operation!\n");
            break;
          case "2":
            console.log("\nYou chose to perform subtraction operation!\n");
            break;
          case "3":
            console.log("\nYou chose to perform multiplication operation!\n");
            break;
          case "4":
            console.log("\nYou chose to perform division operation!\n");
            break;
          case "5":
            console.log("\nYou chose to perform exponentiation operation!\n");
            break;
        }
        // Getting user input numbers
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            try {
              // Validate user input
              const x = CalculatorSupport.validateInput(firstNumber);
              const y = CalculatorSupport.validateInput(secondNumber);
              //Controlling Calculation Process
              switch (choice) {
                // Addition Operation
                case "1":
                  CalculatorSupport.addition(x, y);
                  controlPanel();
                  break;

                // Subtraction Operation
                case "2":
                  CalculatorSupport.subtraction(x, y);
                  controlPanel();
                  break;

                // Multiplication Operation
                case "3":
                  CalculatorSupport.multiplication(x, y);
                  controlPanel();
                  break;

                // Division Operation
                case "4":
                  CalculatorSupport.division(x, y);
                  controlPanel();
                  break;

                // Exponentiation Operation
                case "5":
                  CalculatorSupport.exponentiation(x, y);
                  controlPanel();
                  break;
              }
            } catch (error) {
              console.log("Error: " + error.message);
              controlPanel();
            }
          });
        });

        break;

      case "6":
      case "7":
        // Controlling Operations with one number (√, !)
        // Providing titles
        switch (choice) {
          case "6":
            console.log("\nYou chose to perform square root operation!\n");
            break;
          case "7":
            console.log("\nYou chose to perform factorial operation!\n");
            break;
        }
        // Getting user input number

        rl.question("enter a number: ", (number) => {
          try {
            const x = CalculatorSupport.validateInput(number);

            //Controlling Calculation Process
            switch (choice) {
              // Square Root Operation
              case "6":
                CalculatorSupport.squareRoot(x);
                controlPanel();
                break;
              // Factorial Operation
              case "7":
                CalculatorSupport.factorial(x);
                controlPanel();
                break;
            }
          } catch (error) {
            console.log("Error: " + error.message);
            controlPanel();
          }
        });
        break;

      case "8":
        // Controlling exit functionality
        console.log(`\n101 said "Goodbye!"\n`);
        rl.close();
        break;

      default:
        console.log(
          "Error: Please enter a number from the control panel. Please try again!"
        );
        controlPanel();
    }
  });
}

controlPanel();
