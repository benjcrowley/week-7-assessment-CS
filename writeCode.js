//SUM ZERO
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero (arr) {
    if (Array.isArray(arr) && arr.length) {
        
        
        for (let i = 0; i < arr.length; i++) {
            zeroArr = arr.map(x => x + arr[i])
        }
        if (zeroArr.includes(0)) {
            return true
        } else {
            return false
        }



    } else {
        return false
    }
}
// This function has a run time complexity of 0(n^2) because of the nested map method in the for loop. 
// This function's space complexity is linear - O(n) becuase of the zeroArr being filled up by the map

// console.log(addToZero([]));
// // -> False
// console.log(addToZero([1]));
// // -> False
// console.log(addToZero([1, 2, 3,]));
// // -> False
// console.log(addToZero([1, 2, 3, -2]))
// -> True

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str) {
    let uniqueStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!uniqueStr.includes(str[i])){
            uniqueStr += str[i]
            // console.log(uniqueStr)
        } else {
            return false
        }
    }
    return true
}
//this function has a linear time complexity, O(n) because there is a for loop that will run the length of the string. The interesting thing is that n wont go above 45 for the time being
//the space complexity for this function is also lineaer, because we are creating a new string with length n

let longestWordEnteredInTheMostTrustedEnglishDictionaries = "Pneumonoultramicroscopicsilicovolcanoconiosis"
// console.log(longestWordEnteredInTheMostTrustedEnglishDictionaries.length)

// console.log(hasUniqueChars("Monday"));
// // // -> True

// console.log(hasUniqueChars("Moonday"))
// // -> False

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

let alphebet = "abcdefghijklmnopqrstuvwxyz"
function isPangram (str) {
    str = str.toLowerCase()
    // console.log(str)
    for (let i = 0; i < alphebet.length; i ++) {
        if (!str.includes(alphebet[i])){
            // console.log(`${str} does not include the letter ${alphebet[i]}`)
            return false
        }
    
    } 
    return true
}
// this function has a time complexity of O(n), This is because .includes has to run through each character of the string, and the for loop is constant. 
//this function has a space complexity of O(1), because no new memory is being used by the function.

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// // -> True
// console.log(isPangram("I like cats, but not mice"))
// -> False

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {
    let maxLength = 0
    arr.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length
        }
    })
    return maxLength
}

// this function has a time complexity of O(n) because as the list of words grows, the time to run the for.each method grows with it. 
// this function has a O(1) (constant) space complexity. 

// console.log(findLongestWord(["hi", "hello", longestWordEnteredInTheMostTrustedEnglishDictionaries ]));
// -> 5