    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Mike", age: 35, city: "Chicago" }
];

//map 
const personName = people.map(n => n.name);
//console.log(personName); --> output:[ 'John', 'Jane', 'Mike' ]


//for each
people.forEach(boyos => console.log(boyos.age));