const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 2, 35,4 ,56, 78,45];
const arrayMax = Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax);

//use spread operator to copy
const friends = [4, 5, 6, 7];
const bondhu = friends;
bondhu.push(9);
//console.log(bondhu); --> evabe dile duitatei 9 dhukbe karon memory te ekta value e dhuke setari duita nam
//console.log(friends);

const dosto = [...friends];//copy numbers not array
console.log(dosto);
friends.push(100)
console.log(friends)//shudhu friends ei add hobe