//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sum(num1, string, num2) {
    return num1 + Number(string) + num2 //Also worked with parseInt(string) but I need to read more...
}
// console.log(sum(num10, string8, one))

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function modulo3() {
    for (var i = 20; i <= 100; i++) {
        // i % 3 === 0 ? console.log(i) : ??? - Wanted to use ternary, but I could not use continue as the false value. Check for options when you have time
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
// modulo3() //Could format it to take starting and max values as arguments, but the challenge asked for specific numbers

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function average(arr) {
    runningTotal = 0
    for (var i = 0; i < arr.length; i++) {
        var score = arr[i];
        runningTotal += score
    }
    return runningTotal / arr.length
}

// console.log(average(scores))