let container = document.querySelector(".welcome");
let date = new Date();
//date.getSeconds();
date = date.getHours();
//console.log();
let greeting;

if(date >= 4 && date < 10) {
    greeting = "Good Morning";
}else if(date >= 10 && date < 12) {
    greeting = "Good day";
}else if(date >= 12 && date < 18) {
    greeting = "Good afternoon";
}else if(date >= 18 && date < 22) {
    greeting = "Good evening";
}else if(date >= 22 && date < 4) {
    greeting ="Good Night";
}else {
    greeting = "Are you an alien???"
}
container.append(greeting);


