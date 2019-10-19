'use strict'
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

for (i = 1; i < 8; i++){
    console.log(i);
}

for (i = 1; i < 8; i++){
    if(i == 6){
        break;
    }
    console.log(i);
}

for (i = 1; i < 8; i++){
    if( i == 6){
        continue;
    }
    console.log(i);
}

let x = 5; 
alert( x++ );
