const numbers = [4, 5, 6 ,7 , 8, 9 ,10];

//function doubleIt (num){
//   return num *2;
//}

//const result = numbers.map(doubleIt);
const doubleIt = n => n*2;
const result = numbers.map(doubleIt);

const output = numbers.map(n => n*2);