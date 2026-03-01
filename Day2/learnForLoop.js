//Program to print the odd numbers from 1 to 20
//limit: 1 to 20
//find the odd numbers till the given limit and print each of them

let limit = 20; 

console.log(`Printing the odd numbers from 1 to ${limit}: `)
for(let i=1;i<=limit;i++) {
    if(i%2!=0) {
        console.log(i)
    }
}