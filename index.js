let passwordOne = document.getElementById("passwordone")
let passwordtwo = document.getElementById("passwordtwo")
let generateBtn = document.getElementById("generate")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

function createCharacter() {
    let random = Math.floor(Math.random() * characters.length)
    return characters[random]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += createCharacter()  
               
    }
    return randomPassword
}

generateBtn.addEventListener("click", function() {
let generatedPasswordOne = generateRandomPassword()
let generatedPasswordTwo = generateRandomPassword()

passwordOne.textContent = generatedPasswordOne
passwordtwo.textContent = generatedPasswordTwo   
})





