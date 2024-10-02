const people = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Mike", age: 35, city: "Chicago" }
];

//map 
const personName = people.map(n => n.name);
//console.log(personName); --> output:[ 'John', 'Jane', 'Mike' ]


//for each
people.forEach(boyos => console.log(boyos.age)); //--> output:30 25 35


//filter

const older = people.filter(boyos => boyos.age >25)
console.log(older)
/**output:
 * [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Mike', age: 35, city: 'Chicago' }
]
 */


//find
const older2 = people.find(boyos => boyos.age <35) ;
console.log(older2)
//output: { name: 'John', age: 30, city: 'New York' } 
//jeta age pabe shudhu setai output hobe jotogulai match hok

//reduce

const total = people.reduce((acum, current) => acum + current.age ,0)
console.log(total)