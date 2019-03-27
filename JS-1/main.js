/*

    -------------Задача №1---------------

function converter(amount) {
  const grn = 28;
  let result = amount*grn;
  console.log(result);
}
let money = prompt('Введіть суму');


   //-------------Задача №2---------------

function reverse(str) {
  let reversedText = '';
  for(i =-- str.length; i>=0; i--){
    reversedText+=str[i];
  }
  console.log(reversedText);
}

let  text = prompt('Введіть текст');
reverse(text);


   //-------------Задача №3---------------

function printN(int) {
  for(let i = 0; i<=int; i++){
    let text = '';
    for (let j = 0; j<i; j++) {
      text+=i;
    }
    console.log(text);
  }
}
let number = prompt('Введіть цифру');
printN(number);

   //-------------Задача №4---------------

function sumRange(start, end) {
  let sum = 0;
  while (start<=end) {
    sum += start;
    start++;
  }
  console.log(sum);
}
sumRange(2, 4);
sumRange(-1, 3);

   //-------------Задача №5---------------
function min(arr) {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<minValue) {
      minValue = arr[i];
    }else{};
  }
  console.log(minValue);
}

let text = prompt('Введіть довільні числа');
array = text.split(",");
min(array);

   //-------------Задача №11---------------
function fibonachi(n) {
  var start = [1,1];
  for (let i = 2; i<=n; i++){
    start[i] = start[i-2]+start[i-1];
  }
  console.log(start[n-1]);
}
fibonachi(3);
fibonachi(5);
fibonachi(7);
*/
