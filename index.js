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