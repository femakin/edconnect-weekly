/*
In this challenge, you will test your knowledge of functions.

THE PROBLEM:
One of the ways that governments around the world generate revenue is through taxes. One of such taxes is the income tax which is generally computed as the product of the tax rate times the taxable income.

The tax rate is often a function of the income or in other words individuals at different income levels will pay different taxes.

Also, in some countries like the UK, individuals get to keep a certain amount of their income
that's not taxed while the remainder is taxed at the applicable rate. So for example, let's say a person makes 100K and their tax rate is 10% or 0.1 but they are allowed to keep 30K. They will end up paying 7000 or 7K in taxes because:
100K - 30K = 70K. // they keep 30K and have 70K left.
10% of 70K = 7K. // they will pay 10% tax on what's left.

Your challenge is to complete the code below to return the function that will correctly calculate taxes for a person based on the rules below.

Amount                 Tax Rate
------------------------------------
<= 100,000             10% or 0.1
> 100,000 to 500,000  20% or 0.2
> 500,000              35% or 0.3
*/

// Should return a function that accepts a number that's the amount to be taxed
// and returns the tax amount after factoring in the income not taxed and the
// applicable tax rate.
function getTaxCalculator(incomeNotTaxed) {

    // your code here (approximately 10 lines)

    let taxAmount;
    let taxableIncome;

    function taxCalculator(income) {
        if (income <= 100000) {
            tax = 0.1
        } else if (income > 100000 && income === 500000) {
            tax = 0.2
        } else {
            tax = 0.3
        }
        taxableIncome = income - incomeNotTaxed;
        taxAmount = taxableIncome * tax;
        return taxAmount;
    }

    return taxCalculator
}
// THIS IS FOR YOUR TESTING ONLY.
const calculateTax = getTaxCalculator(30000)
console.log(calculateTax(100000)) // should print 70000
console.log(calculateTax(350000)) // should print 64000
console.log(calculateTax(600000)) // should print 171000


// Given an array of scores,
// return an array of the top 3 scores in descending order.
// You can assume you will always receive an input array with at least 4 scores.
// Examples:
//     Input: [4, 10, 3, 40, 2], Expected output: [40, 10, 4]
// Input: [2, 2, 2, 2, 2, 2, 2], Expected output: [2, 2, 2]
// Input: [-1, 0, 40, -50], Expected output: [40, 0, -1]

function getTopScores(scores) {
    let result = [];
    let all = [];
    result.push(scores.sort(function(a, b) { return b - a }));
    all.push(result[0].splice(0, 3))
    return all[0];
}
getTopScores([-1, 0, 40, -50])