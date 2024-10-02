let str = "My favourite cake flavour is vanilla.".toLowerCase();
let hasAllVowels = str.match(/a/) && str.match(/e/) && str.match(/i/) && str.match(/o/) && str.match(/u/);
console.log(!!hasAllVowels);