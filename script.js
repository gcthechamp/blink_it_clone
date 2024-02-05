const toggle = document.getElementById("toggle-icon");
toggle.addEventListener("click",onClickToggle);

const others = document.getElementById("others");


const hamburger = document.getElementById("hamburger_icon");
const hamburgerPopup = document.getElementById("hamburger-popup");
hamburger.addEventListener("click", onHamClick);

function onClickToggle()
{
    let style = window.getComputedStyle(others);
    let display = style.getPropertyValue('display');
    if(display == "none")
    {
     others.style.display = "block";
     toggle.innerText = "-";
    } 
    else  
    {
     others.style.display = "none";
     toggle.innerText = "+";
    }
}    





function onHamClick()
{
  hamburgerPopup.classList.toggle("hide");
}
