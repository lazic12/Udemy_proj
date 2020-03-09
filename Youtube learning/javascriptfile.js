// 'use strict'
// console.log("Hello" + " " + "Mister Pupki");

// document.getElementById('out').innerHTML = "hello";
// // document.querySelector(".smthelse").innerHTML = 15;

// document.querySelector('h2').innerHTML = newFunction();

// function newFunction() {
// //     return 'Noonw';
// // }

// // let browser = prompt("Enter your browser here", " ");
// // if (browser == "Edge") {
// //     alert("You've got the Edge!");
// // } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
// //     alert('Okay we support these browsers too');
// // } else {
// //     alert('We hope that this page looks ok!');
// // }

// // const number = +prompt('Введите число между 0 и 3', '');

// // switch (number) {
// //     case 0:
// //         alert('Вы ввели число 0');
// //         break;

// //     case 1:
// //         alert('Вы ввели число 1');
// //         break;

// //     case 2:
// //     case 3:
// //         alert('Вы ввели число 2, а может и 3');
// // }

// // let a = {
// //     one: "Hello",
// //     two: 23
// // }


// // let b = {};
// // for (let key in a) {
// //     console.log(key);
// //     b[key] = a[key];
// // }
// // b.five = 3;

// // console.log(a);
// // console.log(b);

// const video = {
//     title: 'a',
//     play() {
// //         console.log(this);
// //     }
// // };
// // video.play();

// // let user = {
// //     name: "Джон",
// //     age: 30,

// //     sayHi() {
// //         // this - это "текущий объект"
// //         alert(this.name);
// //     }

// // let numbers = new Set([1, 2, 3, 4, 5]);

// // numbers.add(6);
// // numbers.add(...[5, 4, 3, 2, 1]);
// // console.log([...numbers].length);


// const obj = {
//     value: 3,
//     valueOf() {
//         return '2';
//     },
//     toString() {
//         return '2';
//     }
// // };
// // console.log(+obj == '2');

// // (function display(first, second, ...others) {
// //     console.log('My choice is ${others[1]}');
// // })('John', 'Peter', 'Andre', 'Simon', 'Alex', 'Tomas');

// var objA = {
//     name: 'John',
//     age: 22
// };
// var objB = objA;
// objB.name = 'Peter';
// objA.age = 25;

// var objC = {
//     ...objB,
//     ...{
//         age: 28
//     }
// };
// objC.name = 'Alex';

// var objD = Object.assign({
//     surname: 'Smith'
// }, objC, {
//     age: 30
// });
// objD.name = 'Max';

// console.log(objA, objB, objC, objD);

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 2000);
// }

// var module = (function () {
//     var name = 'John';
//     return {
//         getName() {
//             return name;
//         }
//     }
// })();

// module.name = 'Peter';
// console.log(module.getName());

// function (arr) {

//     var arr = [1, 2, 3],

//         setTimeout(arguments.callee, 2000);



// };

// function arrgs() {

//     var arr = [1, 2, 3];

//     setTimeout(arrgs(arr[0], arr[1], arr[2]), 2000)
// }
// arrgs();

// const obj = {
//     name: 'John',
//     setName(name) {
//         this.name = name;
//     }
// };
// var name = 'Max';

// function display() {
//     return this.name;
// }
// obj.setName.apply(obj, [display.call()]);
// console.log(obj.name);

// var objA = {
//     data: 1,
//     set value(data) {
//         this.data = data * 2;
//     },
//     get value() {
//         return this.date - 1;
//     }
// };

// var objB = {
//     data: 1,
//     set value(data) {
//         this.data = data - 5;
//     },
//     get value() {
//         return this.date + 10;
//     }
// };

// objB.data = objA.value - 5;
// console.log(objB.value);

// console.log(objA.value);
// console.log(objB);

let arr = [1, 2, 3];
if (arr.length = 3) {
    alert(arr[0] + arr[1] + arr[2]);
}