/* a technique for unpacking objects, arrays and assigning them to variables

helps to deal with functions that have a lot of parameters, default values

is convenient to write, easy to maintain and friendly to read

saves from writing repetitive code
*/

const actor = {
    name: 'sanjida',
    age : 21,
    phone: '01948794307',
    money: 123457956960
}

const {phone, age} = actor;
const {age: boyos} = actor;// obj change

//array destructuring
const numbers = [45, 77];
const [first, second] =  numbers;
console.log(first, second)
const [x, y] = [12, 66]
console.log(x,y)

//advanced

function doubleThem(a,b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(6, 8);
console.log(prothom, ditiyo)