//Math.random returns a # btw 0 and 1, inclusive of 0 and exclusive of 1. so you will see in this code we multiply it by 11 which will make it pick a # btw 0 and 11 exclusive of 11. Then we "floor" it which means round down. This will give us 1 through 10. 

const genButton = document.querySelector(".generate"); 
const genNum = document.querySelector(".number");

const generateIt = () => {
   const rand = Math.floor(Math.random() * 11); 
   genNum.innerHTML = rand; 
}

genButton.onclick = () => {
    generateIt(); 
}

generateIt(); 

