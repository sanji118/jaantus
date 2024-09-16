function inchToFeet(inch){
    let feetFraction = inch / 12;
    let feetNum = parseInt(feetFraction);
    let inchNum = inch % 12;
    let height = feetNum + " fit " + inchNum + " inch";
    return height;
}
console.log(inchToFeet(75));