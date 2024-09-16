let statement = "I am hard working person";
let words = statement.split(" ");
let reversedSen = "";

for (let i = words.length;i >= 0; i--){
    reversedSen += words[i] + (i > 0? " " : "");
}
reversedSen = `'${reversedSen}'`;
console.log(reversedSen)