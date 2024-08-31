const clockCont = document.querySelector(".clockCont");
const secdHand = document.querySelector(".secdHand");
const mintHand = document.querySelector(".mintHand");
const hourHand = document.querySelector(".hourHand");
const time = document.querySelector(".time");
const dateCont = document.querySelector(".date");

let numberPosition = 29.9;
document.querySelectorAll(".clockCont p").forEach((item) => {
  item.style.rotate = `${numberPosition}deg`;
  numberPosition += 29.9;
});

for (let i = 0; i < 60; i++) {
  const stick = document.createElement("div");
  stick.innerHTML = "|";
  if (i % 5 === 0) {
    stick.classList.add("fifth-stick");
  }
  stick.style.rotate = `${i * 6}deg`;
  stick.classList.add("stick");
  clockCont.appendChild(stick);
}

const updateTime = () => {
  const monthsName = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const fullDate = new Date();
  const seconds = fullDate.getSeconds();
  const minutes = fullDate.getMinutes();
  let hours = fullDate.getHours();
  let format = null;
  const year = fullDate.getFullYear();
  const month = monthsName[fullDate.getMonth()];
  const day = daysName[fullDate.getDay()];
  const date = fullDate.getDate();
  if (hours > 12) {
    hours = hours - 12;
    format = "PM";
  }
  else {
    format = "AM";
  }
  secdHand.style.rotate = `${seconds * 6}deg`;
  mintHand.style.rotate = `${minutes * 6}deg`;
  hourHand.style.rotate = `${hours * 30 + minutes * 0.5}deg`;

  dateCont.textContent =`${day}, ${date} ${month} , ${year}`;
  time.textContent = `${hours.toString().length === 1 ? "0" + hours : hours}:${
    minutes.toString().length === 1 ? "0" + minutes : minutes
  }:${seconds.toString().length === 1 ? "0" + seconds : seconds} ${format}`;
};

updateTime();
setInterval(updateTime, 1000);
