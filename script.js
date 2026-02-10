const intro = document.getElementById("intro");
const content = document.getElementById("content");
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  content.classList.remove("hidden");
  song1.volume = 0.7;
  song1.play();
});

document.getElementById("trigger").onclick = () => {
  document.getElementById("reaction").classList.remove("hidden");
};

const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 200 - 100 + "px";
  noBtn.style.top = Math.random() * 200 - 100 + "px";
});

document.querySelectorAll(".yes").forEach(btn => {
  btn.onclick = () => {
    song1.pause();
    song2.currentTime = 45;
    song2.play();
    document.getElementById("final").classList.remove("hidden");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
});

// Countdown
let count = 5;
const countEl = document.getElementById("count");
const timer = setInterval(() => {
  count--;
  countEl.textContent = count;
  if (count === 0) clearInterval(timer);
}, 1000);
