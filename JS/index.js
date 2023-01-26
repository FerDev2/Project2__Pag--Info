const menu = document.getElementById("menu");
const options = document.getElementById("options");
const clo = document.createElement("li");
const title = document.createElement("h5");
const back = document.getElementById("back");


clo.innerHTML= "X";


menu.addEventListener("click", () => {
    options.appendChild(clo);
    options.classList.toggle("header-options");
    options.classList.add("header-options--active");
    back.style.display='block';
})

clo.addEventListener("click", () => {
    options.removeChild(clo);
    options.classList.toggle("header-options");
    options.classList.remove("header-options--active");
    back.style.display='none';

})