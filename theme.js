
function toggleTheme() {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("shopNestTheme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("shopNestTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}
