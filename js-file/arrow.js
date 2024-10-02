function add (a, b){
    return a + b;
}

//function expression
const add2 = function (a, b){
    return a + b;
}


//arrow function
const add3 = (a, b) => a + b ;
const myName = () => console.log('Sanjida');
const square = a => a*a;
//arrow func is one of the features introduced in the Es6 version of js. It allows you t create functions in a cleaner way compared to regular functions.

//difference: this 
//1. arrow function:
let me = {
    name: 'Sanjida',
    thisInArrow: () => {
        console.log('My name is ' + this.name);
    },
};

me.thisInArrow(); // output: My name is undefined

//2. regular function:
let me2 = {
    name: 'Sanjida',
    thisInRegular: () => {
        console.log('My name is ' + this.name);
    },
};

me2.thisInRegular();//output: My name is Sanjida

//method:single or one parameter--> 1
const getAge = (person) => person.age;
const student = { name: 'sanjida', age: 45}
const age = getAge(student);
console.log(age);
// 2
const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 2, 13])
console.log(third);

//method: no parameter --> 1
const getPi = () => Math.PI;
console.log(getPi);

//large arrow function. if you want to get anything returned from this function. then you have to use the return keyword

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}