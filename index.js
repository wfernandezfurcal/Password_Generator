const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let inputOneEle = document.getElementById("inputOne");
let inputTwoEle = document.getElementById("inputTwo");
let symbolsCheck = document.getElementById("symbols");

let firstPasswordGenerated = "";
let secondPasswordGenerated = "";

function generatePassword() {
    let characterOne = "";
    let characterTwo = "";

    firstPasswordGenerated = "";
    secondPasswordGenerated = "";

    for (let i = 0; i < 15; i++){
        characterOne = characters[Math.floor(Math.random() * 91)];
        characterTwo = characters[Math.floor(Math.random() * 91)];

        firstPasswordGenerated += characterOne;
        secondPasswordGenerated += characterTwo;
    }

    inputOneEle.value = firstPasswordGenerated;
    inputTwoEle.value = secondPasswordGenerated;
    if (symbolsCheck.checked){
        console.log("Esta activado");
    }else{
        console.log("No esta activado");
    }
}

function copyToClipboard(element) {  
    // Select the text field
    element.select();
    element.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(element.value);
  }