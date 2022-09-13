const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
let body = document.getElementById("gradient");
let getCss = document.querySelector("p");

const getGradient = (event) => {
    body.style.backgroundImage = "linear-gradient(to top, " 
    + color1.value 
    + ", "
    + color2.value
    + ")";
}

color1.addEventListener("input", getGradient);
color2.addEventListener("input", getGradient);

const setDirection = (event) => {

let direction = document.querySelector('input[name="direction"]:checked').value

if (direction === "down-right") {
    direction = body.style.backgroundImage = "linear-gradient(to bottom right, " +color1.value+ ", "+ color2.value + ")";
    }

else if (direction === "down") {
    direction = body.style.backgroundImage = "linear-gradient(to bottom , " +color1.value+ ", "+ color2.value + ")";
    }
  
else if (direction === "down-left") {
    direction = body.style.backgroundImage = "linear-gradient(to bottom left , " +color1.value+ ", "+ color2.value + ")";
    }
    
else if (direction === "right") {
    direction = body.style.backgroundImage = "linear-gradient(to right , " +color1.value+ ", "+ color2.value + ")";
    }
   
 else if (direction === "left") {
    direction = body.style.backgroundImage = "linear-gradient(to left , " +color1.value+ ", "+ color2.value + ")";
    }

else if (direction === "up-right") {
    direction = body.style.backgroundImage = "linear-gradient(to top right , " +color1.value+ ", "+ color2.value + ")";
    }

else if (direction === "up") {
    direction = body.style.backgroundImage = "linear-gradient(to top , " +color1.value+ ", "+ color2.value + ")";
    }

else if (direction === "up-left") {
    direction = body.style.backgroundImage = "linear-gradient(to top left , " +color1.value+ ", "+ color2.value + ")";
    }
     
    getCss.textContent = body.style.backgroundImage + ";"; 
} 

color1.addEventListener("click", setDirection);
color2.addEventListener("click", setDirection);

