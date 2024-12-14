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
  // Division validation: Ensure the second number is not zero.
  if (y === 0) {
    console.log(
      "Error: Division requires a second number that is not zero. Please try again!"
    );
  } else {
    console.log(`\n${x} / ${y} = `, x / y);
  }
  controlPanel();
}

function exponentiation(x, y) {
  // Here, we handle a less common case: negative exponents.
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
      } else {
        console.log(`\n${x} ^ ${y} = `, Math.pow(x, y));
      }
      break;
    default:
      console.log(`\n${x} ^ ${y} = `, Math.pow(x, y));
      break;
  }
  controlPanel();
}

function squareRoot(x) {
  // Handling negative values
  // Method 1: Display an error message
  if (x < 0) {
    console.log(
      "Error: Square Root requires a positive value. Please try again!"
    );
  } else {
    console.log(`\nSquare root of (${x}) is: `, Math.sqrt(x));
  }

  // Method 2: Convert negative values to positive
  // console.log(`\nSquare root of (${x}) is: `, Math.sqrt(Math.abs(x)));

  controlPanel();
}

function factorial(x) {
  // Handling negative values
  // Method 1: Display an error message
  if (x < 0) {
    console.log(
      "Error: Factorial requires a positive value. Please try again!"
    );
  } else {
    let x_factorial = 1;
    if (x === 0 || x === 1) {
      console.log(`\n${x}! = `, 1);
    } else {
      for (let i = x; i > 1; i--) {
        x_factorial = x_factorial * i;
      }
      console.log(`\n${x}! = `, x_factorial);
    }
  }

  // Method 2: Convert negative values to positive
  // x = Math.abs(x);
  // let x_factorial = 1;
  // if (x === 0 || x === 1) {
  //   console.log(`\n${x}! = `, 1);
  // } else {
  //   for (let i = x; i > 1; i--) {
  //     x_factorial = x_factorial * i;
  //   }
  //   console.log(`\n${x}! = `, x_factorial);
  // }

  controlPanel();
}

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
            const x = parseFloat(firstNumber);
            const y = parseFloat(secondNumber);

            //Controlling Calculation Process
            switch (choice) {
              // Addition Operation
              case "1":
                addition(x, y);
                break;

              // Subtraction Operation
              case "2":
                subtraction(x, y);
                break;

              // Multiplication Operation
              case "3":
                multiplication(x, y);
                break;

              // Division Operation
              case "4":
                division(x, y);
                break;

              // Exponentiation Operation
              case "5":
                exponentiation(x, y);
                break;
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
          const x = parseFloat(number);

          //Controlling Calculation Process
          switch (choice) {
            // Square Root Operation
            case "6":
              squareRoot(x);
              break;
            // Factorial Operation
            case "7":
              factorial(x);
              break;
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
