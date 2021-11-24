// best practice is to declare array as const
const arr = [43,12,432];
//console.log(arr.length);
//console.log(arr[1]);
//console.log(arr);
//console.log(arr.sort());
/************************/        
const arr1 = [
    1,
    '2',
    function(){console.log("hello")},
    {}
]
//arr1[2]();
/**************************/
const arr2 = [];
arr2[0] = 12;
arr2[1] = 43;
arr2[40] = 2;
//console.log(arr2); // [12, 43, <38 empty items>, 2 ]
for(let i=0;i<arr2.length;i++){
   // console.log(arr2[i]);
}
arr2.length = 3;
/*************Iterate_Array****************/
const grades = [15,4,4,66,7,9,33,4,6,43];
//console.log(grades);
//grades.length = 30;
//grades[34] =40;
for(let i = 0; i<grades.length;i++){
    if(grades[i]!==undefined){
    //console.log(grades[i]);
    }
}
//finding the largest nbr
let largest = grades[0];
for(let i =0; i<grades.length;i++){
    if(grades[i]>largest){
        largest = grades[i];
        //console.log("largest "+largest+" "+i);
    }
}
//average of array values
let count =0;
let total =0;
for(let i=0;i<grades.length;i++){
    count++;
    total+=grades[i];
}
let avg= total/count;
//console.log(avg);

//Fill up the array
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let container=[];
while(container.length<10){
    let input = prompt("enter the grade: ");
    container.push(Number(input));
}
console.log((container));




 
