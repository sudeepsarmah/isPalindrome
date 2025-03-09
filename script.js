const mainHeading = document.getElementById("mainHeading")
const secondaryHeading = document.getElementById("secondaryHeading")
const userInput = document.getElementById("text-input")
const submitBtn = document.getElementById("check-btn")
const resultText = document.getElementById("result")


// Solution from internet: https://www.freecodecamp.org/news/freecodecamp-palindrome-checker-walkthrough/
const palindrome = (str) => {
    const alphaNumericOnly = str
        // Lowercase the input
        .toLowerCase()
        // strip out the non-alphanumeric characters
        .match(/[a-z0-9]/g)

    // return string === reversedString
    return alphaNumericOnly.join('') === alphaNumericOnly.reverse().join('')
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const userInputValue = userInput.value.trim()
    const result = palindrome(userInputValue)
    if (!userInputValue) {
        alert("Please input a value")
    } else if (result) {
        resultText.innerText = `${userInput.value} is a palindrome`
        userInput.value = ""
    } else {
        resultText.innerText = `${userInput.value} is not a palindrome`
        userInput.value = ""
    }
})

// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     // Using trim() to remove any unwanted white spaces which might give false negatives. Also, getting the trimmed result and storing it in a variable before using it later on
//     const userValue = userInput.value.trim()
//     // Function to return the reversed string
//     const reverseInput = (value) => {
//         return value.split("").reverse().join("")
//     }
//     if (!userValue) {
//         alert("Please input a value")
//     } else if (userValue === reverseInput(userValue)) {
//         resultText.innerText = `${userValue} is a palindrome`
//         userInput.value = ""
//     } else {
//         resultText.innerText = `${userValue} is not a palindrome`
//         userInput.value = ""
//     }
// })


// 1st Version
// const mainHeading = document.getElementById("mainHeading")
// const secondaryHeading = document.getElementById("secondaryHeading")
// const userInput = document.getElementById("text-input")
// const submitBtn = document.getElementById("check-btn")
// const resultText = document.getElementById("result")
// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     const reverseInput = (userInput) => {
//         let userValue = userInput.value
//         let reversedString = userValue.trim().split("").reverse().join("")
//         return reversedString
//     }
//     if (userInput.value === reverseInput) {
//         resultText.innerText = ${userInput.value} is a palindrome
//         userInput.innerText = ""
//     } else if (!userInput.value) {
//         resultText.innerText = Please input a value
//     } else {
//         resultText.innerText = ${userInput.value} is not a palindrome
//     }
// })




// 2nd Version
// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     // Using trim() to remove any unwanted white spaces which might give      false negatives. Also, getting the trimmed result and storing it in a variable before using it later on
//     const userValue = userInput.value.trim()
//     // Function to return the reversed string
//     const reverseInput = (value) => {
//         return value.split("").reverse().join("")
//     }
//     if (userInput.value === reverseInput(userInput)) {
//         resultText.innerText = ${userValue} is a palindrome
//         userInput.innerText = ""
//     } else if (!userInput.value) {
//         resultText.innerText = Please input a value
//     } else {
//         resultText.innerText = ${userValue} is not a palindrome
//     }
// })

// General Rule of Thumb:
// Handle specific or edge cases first (e.g., empty input, invalid data).
// Proceed to more general cases (e.g., normal palindrome check).
// End with a fallback case (e.g., the final else).
// This logical flow ensures correctness, efficiency, and avoids unnecessary operations.