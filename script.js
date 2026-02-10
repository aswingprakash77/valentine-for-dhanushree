const start = document.getElementById("start");
const app = document.getElementById("app");

start.onclick = () => {
  start.style.display = "none";
  app.classList.remove("hidden");
};

document.querySelectorAll(".clickable").forEach(el => {
  el.onclick = () => {
    el.textContent = "Okay okay 😄 you found the secret";
  };
});

document.getElementById("arey").onclick = () => {
  document.getElementById("angry").classList.remove("hidden");
  document.body.style.background = "darkred";
  setTimeout(() => {
    document.body.style.background = "";
  }, 600);
};

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      r.classList.add("show");
    }
  });
});

const no = document.getElementById("no");
no.addEventListener("mouseover", () => {
  no.style.left = Math.random() * 200 - 100 + "px";
});

document.getElementById("yes").onclick = () => {
  document.getElementById("final").classList.remove("hidden");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

document.body.addEventListener("click", e => {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 800);
});
