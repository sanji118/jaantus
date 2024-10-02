const person = {
    name: 'sanjida',
    age: 21,
    className: 'Bsc first year',
    study: 'Kuet'
}
//value pabo array akare
const values = Object.values(person);
console.log(values);

//property name array
const property = Object.keys(person);
console.log(property)

//puro object array akare property name and value eksathe ekta array
const pair = Object.entries(person);
console.log(pair);

//remove property
delete person.class;
console.log(person)

//method-2
const { className , ...people} = person;
console.log(people);

//freeze
Object.freeze(person);//freeze korar por r kichu change ba remove kora jabena

//seal
Object.seal(person);//update kora jbe kintu notun add ba remove hobena