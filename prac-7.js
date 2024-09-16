var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
concatenated = "";
for (const name of numbers){
    concatenated += name;
}
concatenated = `'${concatenated}'`;
console.log(concatenated);