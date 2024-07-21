const clockCont = document.querySelectorAll(".clockCont");
const secdHand = document.querySelector(".secdHand");
const mintHand = document.querySelector(".mintHand");
const hourHand = document.querySelector(".hourHand");
const time = document.querySelector(".time");



let numberPosition = 29.9;
document.querySelectorAll(".clockCont p").forEach((item) => {
    item.style.rotate = `${numberPosition}deg`
    numberPosition += 29.9;
})

const updateTime = () => {
    const date = new Date();
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    
    
    secdHand.style.rotate = `${seconds * 6}deg`
    mintHand.style.rotate = `${minutes * 6}deg`;
    hourHand.style.rotate = `${hours * 30 + minutes * 0.5}deg`;
    time.textContent = `${hours}:${minutes}:${seconds}`
}

updateTime()
setInterval(updateTime, 1000)
