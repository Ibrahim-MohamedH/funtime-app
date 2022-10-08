
let timing = new Date().getTime();
timing = new Date(timing);
console.log(new Date().getHours())
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let h1 = document.querySelector(".main-time")
let question = document.querySelector(".q")
let answer = document.querySelector(".a")
let button = document.querySelector("button");
let timeTillSR = `${05 - hours}:${56 - minutes}:${60 - seconds}`;
if(hours <= 17 &&  hours > 5){
  if((34 - minutes) < 0){
    timeTillSR = `${17 - hours}:${minutes - 34}:${60 - seconds}`;
    h1.innerHTML = `باقي على غروب الشمس <br> <span>0<span> <br>  ساعة فقط`
    let span = document.querySelector("span");
    span.textContent = timeTillSR;
    question.textContent = "بجد؟"
    answer.textContent = "مفيش بجنيه ثقة؟"
  }else{
    timeTillSR = `${17 - hours}:${34 - minutes}:${60 - seconds}`;
    h1.innerHTML = `باقي على غروب الشمس <br> <span>0<span> <br>  ساعة فقط`
    let span = document.querySelector("span");
    span.textContent = timeTillSR;
    question.textContent = "بجد؟"
    answer.textContent = "مفيش بجنيه ثقة؟🤦‍♂️ "
  }
}else{
  if(hours < 24){
    timeTillSR = `${hours - 05}:${56 - minutes}:${60 - seconds}`;
    let span = document.querySelector("span");
    span.textContent = timeTillSR;
  }else{
    let span = document.querySelector("span");
    span.textContent = timeTillSR;
  }
}
// ##############################################
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