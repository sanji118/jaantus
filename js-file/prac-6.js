const numbers = [12, 98, 5, 41, 23, 78, 46];

evenNumber = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        evenNumber.push(numbers[i]);
    } 
}
console.log(evenNumber)