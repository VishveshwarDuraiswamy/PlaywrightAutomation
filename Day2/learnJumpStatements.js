//Learning break and continue jump statements in Javascript 

let courseCompletion = false; 
let javascriptBasicsLearning = false; 

for(let i=1;i<=8;i++){ 
    if(courseCompletion==true || javascriptBasicsLearning==true) {
       javascriptBasicsLearning = false;
       //break; //this break will stop your execution
    }
    else if(i%2==0) {
        javascriptBasicsLearning = true;
        continue; //this continue will refrain you printing the value when i reaches the number 2
    }
    console.log(i)
}