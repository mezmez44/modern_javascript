
/** Functions */
//declare with function keyword followed by function name.
//parameters are optional

function funName(arg,argn){
   //statements;
}
funName();//call function

/** Hoisting */

//console.log(x);
var x =10;

/** function declaration*/

function greet(){
    console.log('hello there');
}
greet();

/**function expression */

const speak = function(){
console.log('good day')
};
speak();

/**  arguments & parameters */

const talk = function(name, time){
    console.log(`good day ${time} ${name}`);
};
talk('mario','morning');

/**returning values */

const calcArea = function(radius){
    return 3.14 * radius ** 2;
    };
const area = calcArea(5);
console.log(area);

/** arrow functions */

const calcVal = radius => 3.14 * radius ** 2;

/** methods */

const fname = 'shaun';
let result = fname.toUpperCase(); // built in method

/**callbacks & foreach */

let people = ['mario','luigi','ryu','shaun','chun-li'];

people.forEach(person => {
console.log(person);
});

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc((value)=>{
//do something
console.log(value);
});

const logPerson =(person,index)=>{
console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);
