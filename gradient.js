var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var bo= document.getElementById("gradient");

function setGradient()
{
	bo.style.background = "linear-gradient(to right," + color1.value +"," + color2.value +")";
	css.textContent= bo.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);