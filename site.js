const root = document.documentElement;
root.dataset.theme = localStorage.getItem("theme") || "dark";
document.getElementById("theme").onclick = () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", root.dataset.theme);
};

const chips = document.querySelectorAll(".chip"), cards = document.querySelectorAll(".card");
chips.forEach(c => c.onclick = () => {
  chips.forEach(x => x.classList.toggle("on", x === c));
  const lens = c.dataset.lens;
  cards.forEach(k => k.classList.toggle("dim", lens !== "all" && !k.dataset.tags.includes(lens)));
});
