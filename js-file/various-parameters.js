function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log("even size.");
        return true;
    }
    else{
        console.log("odd size.");
        return false;
    }
}

//evenSizedString('Dhaka');
//evenSizedString('Rangpur');



function doDoubleOrTriple (number, doDouble){
    if (doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

//console.log(doDoubleOrTriple(5, true));
//console.log(doDoubleOrTriple(3, false));


function getAge(person){
    const age = person.age;
    return age;
}

console.log(getAge({name:'sanjida', age:21, occupation:'student'}));