const heights2 = [167, 190, 120, 165, 137];
let smallest = Math.min(...heights2);
console.log(smallest);


let min = heights2[0];
for (let i = 1; i< heights2.length; i++) {
    if (heights2[i] < min){
        min = heights2[i];
    }
}
console.log(min);