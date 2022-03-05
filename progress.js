const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
let input = document.querySelector(".percent");

input.addEventListener("change", function () {
  setProgress(input.value);
});

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

let hide = document.getElementById("toggle-button-hide");
hide.onclick = function () {
  if (hide.checked == true) {
    circle.style.display = "none";
  } else {
    circle.style.display = "inline";
  }
};

let animate = document.getElementById("toggle-button-animate");
let interval = setInterval(function () {}, 1000);
animate.addEventListener("click", function (e) {
  console.log(animate.checked);
  let percent = +input.value ? +input.value : 0;
  if (animate.checked == true) {
    clearInterval(interval);
    interval = setInterval(function () {
      if (percent < 100) {
        percent++;
        setProgress(percent);
        input.value = percent.toString();
      } else {
        percent = 0;
      }
    }, 500);
  } else {
    input.value = percent.toString();
    clearInterval(interval);
  }
});
