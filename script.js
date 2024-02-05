const toggle = document.getElementById("toggle-icon");
toggle.addEventListener("click",onClickToggle);

const others = document.getElementById("others");

function onClickToggle()
{
    others.classList.toggle("display-block");
}