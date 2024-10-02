function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if (unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
let set = [1, 2, 3, 3, 4, 5, 6, 7, 5, 8, 9 ,6]
const uniqueArray = noDuplicate(set);
console.log(uniqueArray);