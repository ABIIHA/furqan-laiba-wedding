const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const details = document.getElementById("details");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    details.classList.remove("hidden");
    details.classList.add("show");
    details.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1100);
});