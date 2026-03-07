//Functions to learn Conditional statements.

function launchBrowser(browserName) {
    if(browserName==="chrome")
        console.log(`Browser launched is ${browserName}`)
    else 
        console.log("Browser launched is not a chrome browser, but "+browserName)
}

function runTests(testType){
    switch(testType) {
        case "smoke":
            console.log("you are executing the smoke suite test cases")
            break;
        case "sanity": 
            console.log("you are executing the sanity test cases")
            break;
        case "regression": 
            console.log("you are executing the regression test cases")
            break;
        default: 
            console.log("you are executing the default suite as smoke suite")
            break;
    }
}

let browserName = "chrome"
let testType = ""
launchBrowser(browserName)
runTests(testType)