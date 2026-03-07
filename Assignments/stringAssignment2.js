//Given a string s consisting of words and spaces, return the length of the last word in the string.

//let s = "   fly me to the moon "
let s = "  This is Vishveshwar  studying in    TesstLeaf    "
s = s.trim()

let lastIndexOfSpace = s.lastIndexOf(" ")
let s1 = s.substring(lastIndexOfSpace+1,s.length)

console.log(`The last index of the given string is: ${s1} with the length value ${s1.length}`)

