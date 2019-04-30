/*function printTimeout(str, n) {
	setTimeout(function () {
		return(str);
	}, n);
	console.log(str);
}
printTimeout('hello', 10);
*/

let printStairs2 = function(n) {
  for (var i = 0;i <n;i++) {
    let str = '';
    for (var j = 0; j<n-i ;j++) {
      str+= ' ';
    }
    for (var k=0;k<=(i*2);k++) {
      str+= '#';
    }
    console.log(str);
  }
}
printStairs2(20);

function printTimeout(str, n) {

   let fff = setInterval(otherFunc, 10000);

    function otherFunc() {
        console.log('Hello');
    }
    return str;
}
console.log(printTimeout('Hello', 10));


// Завдання 2
function sumAll(n) {
    if (n == 1){
        return 1;
    }
    return n + sumAll(n - 1);
}
console.log(sumAll(1));
console.log(sumAll(2));
console.log(sumAll(3));
console.log(sumAll(4));
console.log(sumAll(5));
console.log(sumAll(100));


// Завдання 3
function bombTimer(str, time) {
let i = time;
    while (time = 3) {
        time--;
        console.log(i);
}
    if (time = 0){
        console.log(str);
    }
}


// Завдання 4
function factorial(n) {
    if (n == 1){
        return 1;
    }
    return n * sumAll(n - 1);
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));


// Завдання 5
let counter = 3;
let fff = setInterval(function(){
    console.log(counter);
    counter--;
    if (counter === 0) {
        console.log('Boooooom')
        clearInterval(fff);
    }
}, 2000);


// Завдання 6
function filterNumbers(arr, maxNumber) {
let i;
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] < maxNumber) {
            console.log([arr[i]]);
        }
    }

}
console.log(filterNumbers([1, 4, 8, 1, 20], 5));


// Завдання 7
function minMax(arr) {
    let result = [];
        let maxValue = arr.reduce(function(a, b) {
            return Math.max(a, b);
        });
        let minValue = arr.reduce(function(a, b) {
            return Math.min(a, b);
        });
        result = [maxValue, minValue];
        console.log(result);
    }

console.log(minMax([1, 4, 8, 2, 20]));


// Завдання 8
function average(arr) {
    let numbers = arr;
    let total = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue);
    let c = total / arr.length;
return c;
}

console.log(average([1,4,2]));


// Завдання 9
function concatFirstNestedArrays(arr) {
    let newAr = arr.reduce(function (a,b) {
        return a.concat(b);
    })
return newAr;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));
