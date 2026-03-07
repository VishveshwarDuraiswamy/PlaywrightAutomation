//Function to identify the Number Type of the value passed in the argument.

function numberType(number)
{ 
    if(number>0)
        return "Positive"
    else if(number==0)
        return "Zero"
    else if(number<0)
        return "Negative"
    else 
        return "undefined"
}

let value = -15;
var result = numberType(value)
console.log(`Number type of the value ${value} is ${result}`)

