//Write a function to check if two strings are anagrams. 
// An anagram is when you mix up the letters of a word to make a new one, using all the letters

let s = "night"
let v = "thing"

if(s.length!=v.length)
    console.log(`Given strings are not an anagram as it is not matching with the same length value`)

let sArray = [], vArray = []

//function helps you to get each of the character of the string and store it in an array. Return the same array
function typeCasting(value) { 
    let tempArr = []
    let input = value.trim()
    for(let i=0;i<input.length;i++) {
        tempArr[i] = input.charAt(i).toString()
    }
    return tempArr
}

sArray = typeCasting(s)
vArray = typeCasting(v)

//function helps you to sort the array
function sortArray(input){ 
    for(let i=0;i<input.length-1;i++) {
        for(let j=i+1;j<input.length;j++) {
            if(input[i]>input[j]) {
                let temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }
    return input 
}

sArray = sortArray(sArray)
vArray = sortArray(vArray)

//validating two sorted arrays - using for-each loop
let flag = false;
let counter = 0
for(let each of sArray) {
    if(each==vArray[counter]) {
        counter++
        flag = true
    }
    else {
        flag = false;
        break;
    }
}

if(flag) 
    console.log(`Given two strings ${s} and ${v} are anagrams`)
else
    console.log(`Given two strings ${s} and ${v} are not an anagram`)