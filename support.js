// !!!!!! Static methods are used when the functionality is related to the class itself
// rather than any specific instance. They do not depend on instance properties and
// can be called directly on the class. Static methods are useful for utility functions,
// helpers, or operations that are common across all instances, such as validation or
// mathematical operations.

class CalculatorSupport {
  // Input Validation
  static validateInput(userInput) {
    if (isNaN(userInput) === false) {
      return parseFloat(userInput);
    } else {
      throw new Error("You need to enter a digital value!");
    }
  }
  // Method for addition
  static addition(x, y) {
    console.log(`\n${x} + ${y} = `, x + y);
  }

  // Method for subtraction
  static subtraction(x, y) {
    console.log(`\n${x} - ${y} = `, x - y);
  }

  // Method for multiplication
  static multiplication(x, y) {
    console.log(`\n${x} * ${y} = `, x * y);
  }

  // Method for division
  static division(x, y) {
    // Division validation: Ensure the second number is not zero.
    if (y === 0) {
      console.log(
        "Error: Division requires a second number that is not zero. Please try again!"
      );
    } else {
      console.log(`\n${x} / ${y} = `, x / y);
    }
  }

  // Method for exponentiation
  static exponentiation(x, y) {
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
  }

  // Method for square root
  static squareRoot(x) {
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
  }

  // Method for factorial
  static factorial(x) {
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
  }
}

module.exports = CalculatorSupport;
