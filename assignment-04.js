function calculateTax(income, expenses) {
    let tax;
    if ( income >= expenses){
        const taxRate = 20 / 100;
        tax = (income - expenses) * taxRate;
    }
    else{
        return "Invalid Input";
    }
    
    return tax;
}



function sendNotification(email) {
    let notification = "";
    if ( email.includes("@")){
        const emailAddress = email.split('@');
        const username = emailAddress[0];
        const domainName = emailAddress[1];
        notification = username + " sent you an email from " + domainName;
    }
    else{
        return "Invalid Email";
    }
    
    return notification;
}



function checkDigitsInName(name) {
   if (typeof name === "string"){
    for (let i = 0; i < name.length; i++){
        if (name[i] >= '0' && name[i] <= '9'){
            return true;
        }
    }
    
   }
   else{
    return "Invalid Input";
   }
   return false;
}



function calculateFinalScore(obj) {
   if(typeof obj === "object"){
        const {name, testScore, schoolGrade, isFFamily} = obj;
        if ( typeof name === "string" && typeof testScore === 'number' && typeof schoolGrade === 'number' && typeof  isFFamily === 'boolean' &&  testScore <= 50 &&  schoolGrade <=30){
            let finalScore = testScore + schoolGrade;
            if (isFFamily === true){
                finalScore += 20;
            }
            return finalScore >= 80;
        }
    }
   else{
    return "Invalid Input";
   }
}



function  waitingTime(waitingTimes  , serialNumber) {
   if (Array.isArray(waitingTimes) && typeof serialNumber === 'number'){
    let totalTime =0;
    for (let time of waitingTimes){
        totalTime += time;
    }
    const avgTime = Math.round(totalTime / waitingTimes.length);

    const remainPeople = serialNumber - waitingTimes.length -1;

    const waitingTime = remainPeople > 0? remainPeople * avgTime : 0;

    return waitingTime;
   }
   else{
    return "Invalid Input";
   }
}