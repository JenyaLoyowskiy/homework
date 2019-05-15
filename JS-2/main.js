// function printTimeout(str, n) {
//   setTimeout(()=>{
//     console.log(str);
//   },n*1000);
// }
// printTimeout('hello',3)

// function sumAll(n){
//   if (n == 1) {
//     return n;
//   }
//   return n + sumAll(n-1);
// }

// function bombTimer(str, time){
//     let counter = setInterval(()=>{
//       if (time == 0) {
//         clearInterval(counter)
//         console.log(str);
//       }else {
//         console.log(time);
//         time--;
//       }
//     }, 1000)
// }

// function factorial(n){
//   if (n == 1) {
//     return n;
//   }else {
//     return n + factorial(n-1);
//   }
// }

// function bombTimer_2(str,n){
//   setTimeout(()=>{
//     if (n == 0) {
//       console.log(str);
//     }else {
//       console.log(n);
//       bombTimer_2(str, n-1)
//     }
//   },1000)
// }

// function filterNumbers(arr, maxNumber){
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<maxNumber) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }
// filterNumbers([1,4,6,23,6,6], 10);

// function minMax(arr) {
//   let result = {min: arr[0], max: arr[0]};
//     arr.forEach(item=>{
//       if (item>result.max) {
//         result.max = item;
//       }
//       if (item<result.min) {
//         result.min = item;
//       }
//     })
//     console.log(result);
// }

// function average(arr){
//   let sum = arr.reduce((total, item) => total+item)
//   console.log(sum/arr.length);
// }
// average([12,3]);

// function concatFirstNestedArrays(arr){
//   let newArr = arr.reduce((a,b)=>{
//     return a.concat(b);
//   });
// return newArr;
// }
// console.log(concatFirstNestedArrays([[1,2],[2,3],[3,4]]));

// const users = [
//   { id: 1, name: 'John', birthday: '1999-2-12' },
//   { id: 2, name: 'Bill', birthday: '1999-1-19' },
//   { id: 3, name: 'Carol', birthday: '1999-3-11' },
//   { id: 4, name: 'Luce', birthday: '1999-2-22' }
// ];

// function usersToObject(users) {
//   let newUsers = {};
//     users.forEach((user)=>{
//       newUsers[user.id] = user;
//     })
//     console.log(newUsers);
// }
// usersToObject(users);

// const users = [
//   { name: 'John', birthday: '1999-2-12' },
//   { name: 'Bill', birthday: '1999-1-19' },
//   { name: 'Carol', birthday: '1999-4-11' },
//   { name: 'Luce', birthday: '1999-2-22' }
// ];

// function filterUsersByMonth(users, month) {
//   let newUsers = [];
//   users.forEach((user)=>{
//     if (user.birthday[5] == month) {
//       newUsers.push(user);
//     }
//   })
//   console.log(newUsers);
// }
// filterUsersByMonth(users, 4);

// const users = [
//   { name: 'John', birthday: '1999-6-12' },
//   { name: 'Bill', birthday: '2005-5-19' },
//   { name: 'Carol', birthday: '2003-10-11' },
//   { name: 'Luce', birthday: '2000-11-22' }
// ];
//
// function getAdultNames(users) {
//   users.forEach((user)=>{
//     let age = 2019-user.birthday.slice(0,4);
//     if (age>18) {
//       console.log(user.name +' '+ age);
//     }
//   })
// }
// getAdultNames(users)
