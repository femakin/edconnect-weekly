/*
In this challenge, you will test your knowledge of conditionals.

THE PROBLEM:
Banks often charge a fee for a transfer depending on what kind of transfer it is. Typically, transfers within the same bank is free, transfers between local banks have a small fee, and international transfers have the highest fee.

Your challenge is to complete the code below to correctly update a customer's balance after deducting the transfer amount and fee. You should also throw an error 'insufficient balance' if the customer does not have enough balance.

*/

// Don't touch the next line, we will cover functions later.
function updateBalance(currentBalance, transferAmount, transferType) {
    // currentBalance is a variable with a number value, it contains the customer's current balance.
    // transferAmount is a variable with a number value, it contans the amount being transfered.
    // transferType is a variable with a string value, it can be one of the following 'SAME_BANK', 'LOCAL', 'I18N'
    // when transferType is 'SAME_BANK', the transfer fee is 0.
    // when transferType is 'LOCAL', the transfer fee is 1% i.e 0.01
    // when transferTYPE is 'I18N', the transfer fee is 4% i.e 0.04
    // You should not redeclare or update these 3 variables (currentBalance, transferAmount, transferType)

    let fee;
    let newBalance;

    // HINT: First determine the fee. Then check that the current balance is greater than the transfer amount + fee
    // i.e (1+fee) * transferAmount, otherwise throw 'insufficient balance' error.

    // YOUR CODE HERE. (~approximately 15 lines)
    // if ((currentBalance + fee) < currentBalance) {
    //     newBalance = currentBalance - (transferAmount + fee)
    // }

    // example with try catch

    if (transferType == 'SAME_BANK') {
        fee = 0 * transferAmount;
        if (currentBalance > (transferAmount + fee)) {
            newBalance = currentBalance - (transferAmount + fee)
        } else {
            newBalance = "insufficient balance "
        }
    } else if (transferType == 'LOCAL') {
        fee = 0.01 * transferAmount;
        if (currentBalance > (transferAmount + fee)) {
            newBalance = currentBalance - (transferAmount + fee)
        } else {
            newBalance = "insufficient balance"
        }
    } else if (transferType == 'I18N') {
        fee = 0.04 * transferAmount;
        if (currentBalance > (transferAmount + fee)) {
            newBalance = currentBalance - (transferAmount + fee)
        } else {
            newBalance = "insufficient balance "
        }
    }






    return newBalance // DON'T UPDATE THIS LINE
}
// THIS IS FOR YOUR TESTING ONLY.
console.log(updateBalance(5000, 4800, 'SAME_BANK')) // should print 200
console.log(updateBalance(5000, 4800, 'I18N')) // should print 8
console.log(updateBalance(5000, 4800, 'LOCAL')) // should print 152
console.log(updateBalance(5000, 6000, 'LOCAL')) // should throw error 'insufficient balance'

// var a = 10;
// var b = 15;
// if ((a > 10 || b <= 15) && c != 2) {
//     console.log("First")
// } else {
//     console.log("Second ")
// }
// var c = 5;

// var x = 50;
// if (x % 2 != 0) {
//     console.log("First");
// } else if (x > 50) {
//     console.log("Second");
// } else {
//     console.log("Third");
// }
// console.log("Last ");

// var name = "MARIAM ";
// console.log(name.substring(3, 5).toLowerCase());

// var name = "Erin Davis"
// var age = 30
// if (age === "30" && name == "Erin Davis") {
//     console.log("First ");
// } else {
//     console.log("Second");
// }

// for (var i = 1; i <= 20; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if (i % 3 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else {
//         console.log(i)
//     }
// }

// var sum = 0;
// var number = 14555;
// for (var i = 0; i < number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         // console.log(i);
//         sum += i;
//     }
// }

// console.log(sum); //








// if (i >= 86) {
//     console.log(i + "-A")
// } else if (i <= 100 && i == 86) {
//     console.log(i + "-A")
// } else if (i = 85) {
//     console.log(i + "-B")
// } else if (i <= 71 && i == 85) {
//     console.log(i + "-B")
// }






// var num1 = 3;
// var num2 = 5;
// var i = 0;
// var sum = 0;
// while (true) {
//     multiple1 = num1 * i;
//     multiple2 = num2 * i;
//     if (multiple1 < 14555 || multiple2 < 14555)
//         sum = sum + multiple1 + multiple2;
//     else break;

//     i++;
// }
// console.log(sum);

// else if (i <= 85 && (!(i > 70))) {
//     console.log(i + "-C")
// } else if (i = 50) {
//     console.log(i + "-D")
// }


for (var i = 100; i >= 0; i--) {
    if (i > 85) {
        console.log(i + " - " + "A")
    } else if (i >= 71) {
        console.log(i + " - " + "B")
    } else if (i >= 50) {
        console.log(i + " - " + "C")
    } else if (i >= 41) {
        console.log(i + " - " + "D")
    } else if (i >= 36) {
        console.log(i + " - " + "E")
    } else {
        console.log(i + " - " + "F")
    }
}


// this function prints even numbers up to the num parameter.
const evenTo = function(num) {
    if (num == 2) {
        console.log(2);
    } else {
        evenTo(num - 2) // here we're calling the evenTo function inside evenTo
        console.log(num)
    }
}
evenTo(8) // prints 2 4 6 8


function celsiusToFahrenheit(cTemp) {
    let result1 = (cTemp * 9 / 5) + 32;
    console.log(Math.round(result1))
    return result1
}

celsiusToFahrenheit(-100)

function fahrenheitToCelsius(fTemp) {
    let result2 = (fTemp - 32) * 5 / 9;
    console.log(Math.round(result2))
    return result2;
}

fahrenheitToCelsius(45)

let multiply = function(a, b) {
    console.log('Answer is' + a * b);
    return a * b;
}
console.log(multiply(2, 3));


let x = 2;

function update(x) {
    x = 3;
    return x;
}
console.log(update(x));

// const MULTIPLIER = 3;
// if (MULTIPLIER > 2) {
//     MULTIPLIER = 2;
// }

// function add(a, b) {
//     let answer = a + b;
//     return answer;
// }
// add(2, 3);
// console.log(answer);

// function add(a, b) {
//     let answer = a + b;
//     return answer;
// }
// add(2, 3);
// console.log(answer);

// const items = [1, 1, 2, 2, 3, 3, 2]

// const includtwo = items.includes(1);
// console.log(includtwo)

// console.log(myName);
// var myName = "Sunil";



function checkArmstrong(num) {
    var Number = num;
    var digits = 0;
    // Finding the number of digits
    while (num > 0) {
        digits = digits + 1;
        num = parseInt(num / 10);

    }
    num = Number;
    var sum = 0;
    // calculating sum
    while (num > 0) {
        var digit = num % 10;
        sum = sum + Math.pow(digit, digits);
        num = parseInt(num / 10);
    }
    // checking sum with original number
    if (sum == Number) {
        return true
    } else {
        return false
    }
}
checkArmstrong(0)


let bruteForceTwoSum = (array, sum) => {

    let nums = []

    for (let x in array) {
        for (let y in array) {
            // see if array[x] + array[y] === sum
            // save successful combos to nums array
            console.log(y)
        }
        console.log(x)
    }
    return nums
}

bruteForceTwoSum([5, 4, 4], 4)






if (transferType == 'SAME_BANK') {
    fee = 0 * transferAmount;
    if (currentBalance > (transferAmount + fee)) {
        newBalance = currentBalance - (transferAmount + fee)
    } else {
        newBalance = "insufficient balance "
    }
} else if (transferType == 'LOCAL') {
    fee = 0.01 * transferAmount;
    if (currentBalance > (transferAmount + fee)) {
        newBalance = currentBalance - (transferAmount + fee)
    } else {
        newBalance = "insufficient balance"
    }
} else if (transferType == 'I18N') {
    fee = 0.04 * transferAmount;
    if (currentBalance > (transferAmount + fee)) {
        newBalance = currentBalance - (transferAmount + fee)
    } else {
        newBalance = "insufficient balance "
    }
}




switch (transferType) {
    case 'SAME_BANK':
        fee = 0;
        break;
    case 'LOCAL':
        fee = 0.01;
        break;
    case 'I18N':
        fee = 0.04;
        break;
}
if (currentBalance >= (1 + fee) * transferAmount) {
    newBalance = currentBalance - (1 + fee) * transferAmount;
}
` else {
    throw 'insufficient balance'
 }
 `
return newBalance