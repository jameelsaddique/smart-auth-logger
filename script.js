const user = {
    name : "Jameel Ur Rehman",
    role : "Admin"
}

function getSystemStatus(user) {
    const time = new Date().getHours();
    const isNightorDay = time >= 6 && time < 18 ? "Day" : "Night";
    const {name, role} = user;
    return `Good ${isNightorDay}, ${name}!  Your role is ${role}.`;
}
console.log(getSystemStatus(user))

function luckyNumber(){
    const number = Math.floor((Math.random() * 10) + 1);
    const winnerNumber = number > 5 ? `Bigger Value: ${number}` : `Smaller Value: ${number}`;
    return winnerNumber;
}
setInterval(() => {
    console.log(luckyNumber());
}, 3000);