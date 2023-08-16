do {
    var input = parseFloat(prompt("Please Enter a positive integer: "));
    if (Number.isInteger(input) && input >= 0) {
        if (input%1 == 0) {
            break
        }
    }
} while (true);
// input

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
// Check it's Prime number or not

function showPrime(input) {
    const primes = [];

    for (let i = 2; i <= input; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}
// Find all prime numbers that are less than or equal to the input and put them in an empty array.


const show_prime = showPrime(input);

alert("For n = " + input + " prime numbers are " + show_prime)