'use strict';

var letsPractice= 5;
var hereName = "Fedor";
let Boom = 5;
const pi= 3.14;

var newObj = {
    name: "Vasya",
    surname: "Pupkin",
    Age: 35,
    Status: "married"
}
console.log(newObj["Age"]);

// let arr =[ 'notch', 'gotch', 'dotch']
// console.log(arr[0]);

// alert('Hello World!');
// let jim = confirm("are you here?");
// console.log(jim); 
let jim = prompt("are you here?", "Yes");
console.log(jim); 

var money = prompt("Ваш бюджет на месяц", '100');
var time = prompt("Введите дату в формате YYYY-MM-DD", '2019-09-10');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        question1: prompt("Введите обязательную статью расходов в этом месяце", "на кофе" )*2,
        question2: prompt("Во сколько обойдется?", "5")*2
    },
    optionalExpenses: {
    },
    income: [],
    savings: false
};

console.log(appData.expenses);

let dailyBudget = money/30;
alert('Your daily budget is ' + dailyBudget);