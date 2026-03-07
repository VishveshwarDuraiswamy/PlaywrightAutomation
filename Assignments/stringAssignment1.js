//Given a string s consisting of words and spaces, return the length of the last word in the string. 

let s = "Hello World Vishveshwar"
let res = s.split(" ")

let lastWord = res[res.length-1]
let lengthOfLastWord = lastWord.length

console.log(`The last word of the given string is "${lastWord}" with the length value: ${lengthOfLastWord}`)