var name = "Vishveshwar";
var name = "Testleaf"; //we can do reinitialization

console.log(name) 
name = "Vishveshwar" //we can do reassignment 
console.log(name)

//console.log(username) //ReferenceError: username is not defined 

console.log(nickname) //we can call the variable before it has been initialized - Hoisting
var nickname = "vish"


accessValidation("admin")
accessValidation("non-admin")

//scope validations 
function accessValidation(accessRole) { 
    var role = accessRole
    if(role=="admin") {
        var flag = true; 
        //let flag = true; 
        console.log("user is having the admin access")
    }
    else{ 
        console.log("user is not having the admin access")
    }

    console.log(flag)   //no block restrictions applied to the flag variable if it is var
                        //even though the else block has been executed you can see the Hoisting behaviour will occur as you have the var flag declared somewhere in your code. so it will return undefined.  
    console.log(role)
}

//console.log(role); //ReferenceError: role is not defined - Function scope works for var but block scope restrictions are failed to work.  