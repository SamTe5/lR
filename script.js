let registerButton = document.querySelector("#moveRegister")
let loginButton = document.querySelector("#moveLogin")
let logR = document.querySelector("#logR")
let logL = document.querySelector("#logL")
let regR = document.querySelector("#regR")
let regL = document.querySelector("#regL")
let body = document.querySelector("body")
let over = document.querySelectorAll("over")

registerButton.addEventListener("click", function (e) {
    e.preventDefault()

    logL.style.transition = "margin-right 0.7s ease";
    logL.style.marginRight = "100%"
    regL.style.transition = "margin-left 0.7s ease";
    regL.style.marginLeft = "0"
    logR.style.transition = "margin-right 0.7s ease";
    logR.style.marginRight = "100%"
    regR.style.transition = "margin-right 0.7s ease";
    regR.style.marginRight = "0"
    regR.style.transition = "margin-left 0.7s ease";
    regR.style.marginLeft = "0"

   




})

loginButton.addEventListener("click", function (e) {
    e.preventDefault()

    logL.style.transition = "margin-right 0.7s ease";
    logL.style.marginRight = "0"
    regL.style.transition = "margin-left 0.7s ease";
    regL.style.marginLeft = "100%"
    logR.style.transition = "margin-right 0.7s ease"
    logR.style.marginRight = "0"    
    regR.style.transition = "margin-right 0.7s ease";
    regR.style.marginRight = "100%"
    regR.style.transition = "margin-left 0.7s ease";
    regR.style.marginLeft = "-100%"


})

