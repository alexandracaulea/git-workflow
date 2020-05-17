document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("h1");
  setTimeout(() => {
    header.classList.add("show");
  }, 1000);
});
