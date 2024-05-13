var nameInput = document.querySelector(".name-input");
var nameDisplay = document.querySelector(".name-display");

var characterCount = document.querySelector(".character-count");
var ourSentence = document.querySelector(".sentence");

var button = document.querySelector(".reverse");

function reverseString(string) {
    var yourString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        yourString += string[i]
    }

    console.log(yourString);
    countStringChar(yourString);
    nameDisplay.innerHTML = `<h3>${yourString}</h3>`
}

function countStringChar(string) {
    var characterAmount = string.length;
    characterCount.innerHTML = `<h2>${characterAmount}</h2>`
}

button.addEventListener('click', function () {
    reverseString(nameInput.value);
    upperCasify()
})

function upperCasify() {
    ourSentence.classList.add("uppercaseEm")
}


let numbers = [3, 7, 15, 22, 9, 12, 5, 18];

// Log minimum and maximum numbers
// Let's say One Digit number is a minimum number &
var minimumDigit = 9;

// For loop approach
function findHigherNum() {
    var highestNumber = numbers.filter((number) => number > minimumDigit);
    console.log("These are the higher numbers " + highestNumber);
    // Log the higher numbers

    var lowestNumbers = numbers.filter((number) => number < minimumDigit);
    console.log("These are the Lowest numbers " + lowestNumbers);
    // Log the Lower Numbers
}

function sumArrValues() {
    var arraySum = 0;
    for (let index = 0; index < numbers.length; index++) {
        arraySum += numbers[index];
    }
    console.log(arraySum)
}

sumArrValues();
findHigherNum();


function calculateFactorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * calculateFactorial(number - 1);
}

console.log("This is factorial: " + calculateFactorial(4));



function isPrime(number) {
    // Check if number is less than 2, as 0 and 1 are not prime numbers
    if (number < 2) {
        return false;
    }
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by any number, it's not prime
        }
    }
    return true; // If not divisible by any number, it's prime
}

// Example usage:
console.log(isPrime(15)); // Output: true (7 is a prime number)
console.log(isPrime(67)); // Output: false (10 is not a prime number)


var number = 2

if (number % 2 == 1) {
    console.log("this is a prime number")
}