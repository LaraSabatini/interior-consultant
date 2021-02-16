const hamburguer = document.getElementById("hamburguer");
const close = document.getElementById("close");
const navUL = document.getElementById("nav-ul");

hamburguer.addEventListener("click", () => {
    navUL.classList.toggle("show");
});

close.addEventListener("click", () => {
    navUL.classList.toggle("hide");
});