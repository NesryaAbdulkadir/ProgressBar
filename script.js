// horizontal progress bar
const fill = document.getElementById("fill");

let porgress = 0;
setInterval(() => {
  porgress += 5;
  if (porgress > 100) {
    fill.style.background = `green`;
    porgress = 100;
  }
  fill.style.width = `${porgress}%`;
}, 1000);

// steps progress bar

const one = document.querySelector(".first");
const two = document.querySelector(".second");
const three = document.querySelector(".third");
const steps = [one, two, three];

const doneIndexList = [];

function progress(current) {
  steps.forEach((step) => {
    step.classList.remove("active");
  });
  steps.forEach((step, index) => {
    if (index === current) {
      step.classList.add("active");
      doneIndexList.push(index);
    } else if (doneIndexList.includes(index)) {
      step.classList.add("active");
    }
  });
}

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    console.log(doneIndexList);

    progress(index);
  });
});
