let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for (let key in myObject){
    if (myObject.hasOwnProperty(key)){
        let value = myObject[key];
        console.log(`key: ${key} | type: ${typeof value}`);
    }
}