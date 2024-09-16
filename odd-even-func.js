function isEvenOrOdd(nums){
    let even = [];
    let odd = [];
    for (let num of nums){
        if (num % 2 === 0){
            console.log(num);
            even.push(num);
        }
        else{
            odd.push(num);
        }
    }
    return{even, odd};
}

let numb = [1, 2, 3, 4, 5, 6];
let result = isEvenOrOdd(numb);
console.log("Even numbers are :", result.even);
console.log("Odd numbers are :", result.odd);