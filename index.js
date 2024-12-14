//Importing necessary modules
const exp = require("constants");
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

// Reserved block for used functions

function addition(x, y) {
  console.log(`\n${x} + ${y} = `, x + y);
  controlPanel();
}

function subtraction(x, y) {
  console.log(`\n${x} - ${y} = `, x - y);
  controlPanel();
}

function multiplication(x, y) {
  console.log(`\n${x} * ${y} = `, x * y);
  controlPanel();
}

function division(x, y) {
  console.log(`\n${x} / ${y} = `, x / y);
  controlPanel();
}

function exponentiation(x, y) {
  console.log(`\n${x} ^ ${y} = `, Math.pow(x, y));
  controlPanel();
}

function squareRoot(x) {
  console.log(`\nSquare root of (${x}) is: `, Math.sqrt(x));
  controlPanel();
}

function factorial(x) {
  let x_factorial = 1;
  // Handling the two different cases in calculating factorial (!)
  if (x === 0 || x === 1) {
    console.log(`\n${x}! = `, 1);
    controlPanel();
  } else {
    for (let i = x; i > 1; i--) {
      x_factorial = x_factorial * i;
    }
    console.log(`\n${x}! = `, x_factorial);
    controlPanel();
  }
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
        console.log("\nYou chose to perform addition operation!\n");
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
        console.log("\nYou chose to perform subtraction operation!\n");
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
        console.log("\nYou chose to perform multiplication operation!\n");
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);
            multiplication(x, y);
          });
        });
        break;
      case "4":
        // Division Operation
        console.log("\nYou chose to perform division operation!\n");
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);

            // We don't need to check if the second number is zero because the result will automatically display as "Infinity" in such cases.
            //division(x, y);

            // Division validation: Ensure the second number is not zero.
            if (y === 0) {
              console.log(
                "Error: Division requires a second number that is not zero. Please try again!"
              );
              controlPanel();
            } else {
              division(x, y);
            }
          });
        });
        break;
      case "5":
        // Exponentiation Operation
        console.log("\nYou chose to perform exponentiation operation!\n");
        rl.question("enter first number: ", (firstNumber) => {
          rl.question("enter second number: ", (secondNumber) => {
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);

            // Using the `exponentiation()` function directly works fine

            // exponentiation(x, y);

            // But here, we handle a less common case: negative exponents.
            // For more details, check the following link:
            // https://www.uncp.edu/sites/default/files/2022-12/Negative%20Exponents.pdf

            // Quick explanation: A negative exponent like 4^(-2) means 1 / (4 * 4).
            // However, if the base is 0 (e.g., 0^(-2) => 1 / (0 * 0)), the result is undefined because
            // it requires dividing by 0, which is impossible.
            // To handle this, we use the following logic:

            switch (x) {
              case 0:
                if (y < 0) {
                  console.log(
                    `Error: Operation 1 / (0 * 0 * ...) is undefined. Please try again!`
                  );
                  controlPanel();
                } else {
                  exponentiation(x, y);
                }
                break;
              default:
                exponentiation(x, y);
                break;
            }
          });
        });
        break;
      case "6":
        // Square Root Operation
        console.log("\nYou chose to perform square root operation!\n");
        rl.question("enter a number: ", (number) => {
          const x = parseFloat(number);

          // The squareRoot function works fine for positive values,
          // but it doesn't handle negative values

          // squareRoot(x);

          // Handling negative values
          // Method 1: Display an error message

          if (x < 0) {
            console.log(
              "Error: Square Root requires a positive value. Please try again!"
            );
            controlPanel();
          } else {
            squareRoot(x);
          }

          // Method 2: Convert negative values to positive

          // squareRoot(Math.abs(x));
        });
        break;
      case "7":
        // Factorial Operation
        console.log("\nYou chose to perform factorial operation!\n");
        rl.question("enter a number: ", (number) => {
          const x = parseFloat(number);

          // The factorial is undefined for negative integers
          // Method 1: Display an error message

          if (x < 0) {
            console.log(
              "Error: Factorial requires a positive value. Please try again!"
            );
            controlPanel();
          } else {
            factorial(x);
          }

          // Method 2: Convert negative values to positive

          // factorial(Math.abs(x));
        });
        break;
      case "8":
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
