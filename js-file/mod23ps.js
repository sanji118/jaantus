function calculateMoney(numOfTicket){
    if (numOfTicket  >= 0){
        let totalMoney = numOfTicket * 120;
        calculateMoney = totalMoney - (500 + (50*8));
    }
    else{
        return "Error";
    }
    return calculateMoney;
}


function checkName(name){
    if (typeof name === "string"){
        let letterOfname = name.toLowerCase();
        let lastLetter = letterOfname.slice(-1);
       if('ayieouw'.includes(lastLetter)){
        return "Good Name!!!";
       }
       else{
        return "Bad Name!";
       }
    }
    else {
        return "Invalid";
    }
}


function deleteInvalids(array){
    if (Array.isArray(array)){
        let newArray = [];
        for ( element of array){
            if (typeof element === 'number' && isNaN(element) === false){
                console.log(element);
                newArray.push(element);
            }
        }
        return newArray;
    }
    else{
        return "Invalid Input.";
    }
}

//console.log(deleteInvalids([NaN, null, undefined, 1, -1, 9, 0]))


function password(obj){
    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')){
        let websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        let userName = obj.name;
        password = websiteName + '#' + userName + '@' + obj.birthYear;
    }
    else{
        return "Invalid";
    }
    return password;
}

let obj = {
    name: 'kolimuddin',  
    siteName: 'google'
}
//console.log(password(obj));


function monthlySavings(arr, livingCost){
    if ( Array.isArray(arr) && typeof livingCost === 'number'){
        let allPayment = 0;
        let totalSavings;
        for (payment of arr){
           allPayment += payment;
           if(payment >= 3000){
            let tax = payment * (20 / 100);
            totalSavings = allPayment - tax - livingCost;
           }
           else{
            totalSavings = allPayment - livingCost;
           }
        }
        console.log(totalSavings);
        return totalSavings >= 0 ? totalSavings : 'earn more.'
    }
    else{
        return "Invalid Input";
    }
}
//console.log(monthlySavings([900, 2700, 3400], 10000))