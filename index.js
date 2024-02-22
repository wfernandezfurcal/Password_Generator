const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
//Numbers 52 to 61
//Symbols 62 to 90

let inputOneEle = document.getElementById("inputOne");
let inputTwoEle = document.getElementById("inputTwo");
let symbolsCheck = document.getElementById("symbols");
let numbersCheck = document.getElementById("numbers");

let firstPasswordGenerated = "";
let secondPasswordGenerated = "";

function generatePassword() {
    let characterOne = "";
    let characterTwo = "";

    firstPasswordGenerated = "";
    secondPasswordGenerated = "";

    //Without Symbols and numbers
    if (!symbolsCheck.checked && !numbersCheck.checked){
        for (let i = 0; i < 15; i++){
            characterOne = characters[Math.floor(Math.random() * 51)];
            characterTwo = characters[Math.floor(Math.random() * 51)];
    
            firstPasswordGenerated += characterOne;
            secondPasswordGenerated += characterTwo;
        }
    } 
    //only symbols
    else if (symbolsCheck.checked && !numbersCheck.checked){
        for (let i = 0; i < 15; i++){

            characterOne = characters[characterFilter()];
            characterTwo = characters[characterFilter()];
    
            firstPasswordGenerated += characterOne;
            secondPasswordGenerated += characterTwo;
        }
    }
    //only numbers
    else if (!symbolsCheck.checked && numbersCheck.checked){
        console.log("only numbers");
        for (let i = 0; i < 15; i++){
            characterOne = characters[Math.floor(Math.random() * 61)];
            characterTwo = characters[Math.floor(Math.random() * 61)];
    
            firstPasswordGenerated += characterOne;
            secondPasswordGenerated += characterTwo;
        }
    }else{ //Both on
        for (let i = 0; i < 15; i++){
            characterOne = characters[Math.floor(Math.random() * 91)];
            characterTwo = characters[Math.floor(Math.random() * 91)];
    
            firstPasswordGenerated += characterOne;
            secondPasswordGenerated += characterTwo;
        }
    }

    inputOneEle.value = firstPasswordGenerated;
    inputTwoEle.value = secondPasswordGenerated;
}

function copyToClipboard(element) {  
    // Select the text field
    element.select();
    element.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(element.value);

    //Copied message
    const text = element.value;
    
    element.value = "Copied!";
    setTimeout(() => element.value = text, 2000);

  }

  function characterFilter(){
    let filteredCharter = Math.floor(Math.random() * 91);
    
    while (filteredCharter > 51 && filteredCharter < 62){
        filteredCharter = Math.floor(Math.random() * 91);
    }

    return filteredCharter;

  }

  // Dark mode toggle
const btnTheme = document.querySelector(".btn-theme");

// Determine the current theme mode
const savedMode = localStorage.getItem("mode");
const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches // Check user's system preferences for a mode
  ? "dark"
  : "light";
const currentMode = savedMode || systemMode; // Use the saved mode or system mode

// Set the theme mode based on the current mode
document.documentElement.classList.toggle("dark", currentMode === "dark"); // Set the dark class on the root element if current mode is dark

// Set icons appropriately
btnTheme.classList.toggle("fa-sun", currentMode === "light");
btnTheme.classList.toggle("fa-moon", currentMode === "dark");

// Add an event listener to toggle the theme on click
btnTheme.addEventListener("click", function () {
  btnTheme.classList.toggle("triggered"); // Trigger the rotation animation
  const isDarkMode = document.documentElement.classList.toggle("dark"); // Toggle the dark class on the root element and check if the mode is now dark
  localStorage.setItem("mode", isDarkMode ? "dark" : "light"); // Save the current mode in local storage

  // Toggle the icons
  btnTheme.classList.toggle("fa-sun", !isDarkMode);
  btnTheme.classList.toggle("fa-moon", isDarkMode);
});