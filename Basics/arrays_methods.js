let grades = [12];
grades.push(2);    // adds the element at the end
grades.unshift(1); // adds the element at the begining
grades.pop(2); // deletes the element at the
grades.shift(1); // deletes the element at begining
console.log(grades.splice(0,1,4,3,2,1,0,'kiw')); 
//console.log(grades);
grades.sort();
//console.log(grades);
grades.reverse();
//console.log(grades);
grades.fill(3,2,grades.length);
console.log(grades);

let gradesB=[43,12,524,34,23]

let tacos = grades.concat(gradesB);
//console.log(tacos);

//console.log(grades.includes('kiw'));

//forEach method

grades.forEach(function(element){
    //console.log(element);
})

//multi_dimensional array
let notes =[
           [12,13,32,43,42,23],
           [12,43,21,12,43,12],
           [43,12,43,12,45,12]
                             ];
for(let i=0;i<notes.length;i++){
    for(let j= 0;j<notes[i].length;j++){
        console.log(notes[i][j]);
    }
    console.log('~~~~~~~~~~~');
}

notes.forEach(function(row){
    row.forEach(function(col){
     console.log(col);
    })
    console.log('~~~~~~~');
})
                             


