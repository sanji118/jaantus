const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
smallest = heights2[0];
for (let i = 1; i < heights2.length; i++){
    if (smallest.length > heights2[i].length){
        smallest = heights2[i];
    }
}
console.log(smallest);