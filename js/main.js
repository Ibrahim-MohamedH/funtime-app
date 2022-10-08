let h1 = document.querySelector(".main-time")
let question = document.querySelector(".q")
let answer = document.querySelector(".a")
let button = document.querySelector("button");
let span = document.querySelector("span");

let sunrise_time = new Date("Oct 09, 2022 5:56:00").getTime();
let sunset_time = new Date("Oct 09, 2022 17:34:00").getTime();


let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let sunriseDiff = sunrise_time - dateNow;
  let sunsetDiff = sunset_time - dateNow;
  if(sunriseDiff > 0){
    let hours = Math.floor((sunriseDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hours < 10){
      hours = "0" + hours
    }
    let minutes = Math.floor((sunriseDiff % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes < 10){
      minutes = "0" + minutes
    }
    let seconds = Math.floor((sunriseDiff % (1000 * 60)) / 1000);
    if(seconds < 10){
      seconds = "0" + seconds
    }
    span.textContent = `${hours}:${minutes}:${seconds}`
  } else {
    let hours = Math.floor((sunsetDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hours < 10){
      hours = "0" + hours
    }
    let minutes = Math.floor((sunsetDiff % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes < 10){
      minutes = "0" + minutes
    }
    let seconds = Math.floor((sunsetDiff % (1000 * 60)) / 1000);
    if(seconds < 10){
      seconds = "0" + seconds
    }
    h1.innerHTML = `باقي على غروب الشمس <br> <span>0<span>`
    span = document.querySelector("span");
    span.textContent = `${hours}:${minutes}:${seconds}`
    question.textContent = "بجد؟"
    answer.textContent = "مفيش بجنيه ثقة؟🤦‍♂️"
  }
}, 1000)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function displayNone(q, t) {
    await sleep(2000);
    q.classList.remove("none");
    await sleep(1000);
    t.classList.remove("none");
  }
  // #######################################
  
  button.addEventListener("click", async () => {
    location.reload();
  });
  
  displayNone(question, answer)
