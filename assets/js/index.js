const mobel = document.getElementById("mobel")
const close = document.getElementById("close")
const navlist = document.getElementById("navlist")

if (mobel) {
    mobel.addEventListener("click", () => {
        navlist.classList.add("active")
    })
}
if (close) {
    close.addEventListener("click", () => {
        navlist.classList.remove("active")
    })
}