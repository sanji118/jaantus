let now = new Date();
let dayOfWeek = now.getDay();
if (dayOfWeek == 5) {
    console.log("Have a nice Weekend!");
}else if (dayOfWeek > 6) {
    console.log("No informatio Available. You have inputed wrong number.")
}else{
    console.log("Have a nice Day!")
}