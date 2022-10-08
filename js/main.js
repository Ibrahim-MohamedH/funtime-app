
let timing = new Date().getTime();
timing = new Date(timing);
let hours = timing.toString().substring(16, 18);
let minutes = timing.toString().substring(19, 21);
let seconds = timing.toString().substring(22, 24);

timeTillSR = `${05 - hours}:${56 - minutes}:${60 - seconds}`;
let span = document.querySelector("span");
span.textContent = timeTillSR;
let button = document.querySelector("button");
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
question = document.querySelector(".q")
answer = document.querySelector(".a")

button.addEventListener("click", async () => {
  location.reload();
});

displayNone(question, answer)