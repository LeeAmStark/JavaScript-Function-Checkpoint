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

function sumArrValues(){
    var arraySum = 0;
    for (let index = 0; index < numbers.length; index++) {
        arraySum += numbers[index];
    }
    console.log(arraySum)
}

sumArrValues();
findHigherNum();

let mixedArray = [1, "two", 3, "four", 5, "six", 7, "eight", 9, "ten"];

function findStrings(){
    var 
}
// function capitalizeFirstLetter(sentence) {
//     // Split the sentence into an array of words
//     let words = sentence.split(" ");

//     // Iterate over each word
//     for (let i = 0; i < words.length; i++) {
//         // Capitalize the first letter of each word
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     // Join the words back into a sentence
//     return words.join(" ");
// }