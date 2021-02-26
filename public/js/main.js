// Exo 01
let boxBody0 = document.querySelectorAll(".box-body")[0]
let valeur0 = boxBody0.querySelectorAll("input")[0]
let valeur1 = boxBody0.querySelectorAll("input")[1]
let egale0 = boxBody0.querySelector(".btn")
let reponse0 = boxBody0.querySelectorAll("span")[1]


egale0.addEventListener("click", () => {
    reponse0.innerText = parseInt(valeur0.value) + parseInt(valeur1.value)

})
//--------------------------------------------

// Exo 02
let boxBody1 = document.querySelectorAll(".box-body")[1]
let valeur2 = boxBody1.querySelectorAll("input")[0]
let valeur3 = boxBody1.querySelectorAll("input")[1]
let egale1 = boxBody1.querySelectorAll(".btn")[1]
let reponse1 = boxBody1.querySelector("span")

let select0 = boxBody1.querySelector("select")


egale1.addEventListener("click", () => {
    switch (select0.value){
        case "+":
            reponse1.innerText = parseInt(valeur2.value) + parseInt(valeur3.value)
            break;
        case "-":
            reponse1.innerText = parseInt(valeur2.value) - parseInt(valeur3.value)
            break;
        case "*":
            reponse1.innerText = parseInt(valeur2.value) * parseInt(valeur3.value)
            break;
        case "/":
            reponse1.innerText = parseInt(valeur2.value) / parseInt(valeur3.value)
            break;
    }

})
//-------------------------------------------

// Exo 03
let boxBody2 = document.querySelectorAll(".box-body")[2]
let valeur4 = boxBody2.querySelectorAll("input")[0]
let valeur5 = boxBody2.querySelectorAll("input")[1]
let egale2 = boxBody2.querySelectorAll(".btn")[1]
let reponse2 = boxBody2.querySelectorAll("span")[1]

// Button
let addition = boxBody2.querySelectorAll("button")[1]
let soustraction = boxBody2.querySelectorAll("button")[2]
let multiplication = boxBody2.querySelectorAll("button")[3]
let division = boxBody2.querySelectorAll("button")[4]

//Symbol
let i = boxBody2.querySelectorAll("span")[0]

// Addition
addition.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) + parseInt(valeur5.value)
    i.querySelector("i").className = addition.querySelector("i").className
})
// Soustraction
soustraction.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) - parseInt(valeur5.value)
    i.querySelector("i").className = soustraction.querySelector("i").className
})
// Multiplication
multiplication.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) * parseInt(valeur5.value)
    i.querySelector("i").className = multiplication.querySelector("i").className
})
// Division
division.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) / parseInt(valeur5.value)
    i.querySelector("i").className = division.querySelector("i").className
})
//-----------------------------------------

//Exo 04
let boxBody2 = document.querySelectorAll(".box-body")[2]
let valeur4 = boxBody2.querySelectorAll("input")[0]
let valeur5 = boxBody2.querySelectorAll("input")[1]
let egale2 = boxBody2.querySelectorAll(".btn")[1]
let reponse2 = boxBody2.querySelectorAll("span")[1]

// Button
let addition = boxBody2.querySelectorAll("button")[1]
let soustraction = boxBody2.querySelectorAll("button")[2]
let multiplication = boxBody2.querySelectorAll("button")[3]
let division = boxBody2.querySelectorAll("button")[4]

//Symbol
let i = boxBody2.querySelectorAll("span")[0]

// Addition
addition.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) + parseInt(valeur5.value)
    i.querySelector("i").className = addition.querySelector("i").className
})
// Soustraction
soustraction.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) - parseInt(valeur5.value)
    i.querySelector("i").className = soustraction.querySelector("i").className
})
// Multiplication
multiplication.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) * parseInt(valeur5.value)
    i.querySelector("i").className = multiplication.querySelector("i").className
})
// Division
division.addEventListener("click", () => {
    reponse2.innerText = parseInt(valeur4.value) / parseInt(valeur5.value)
    i.querySelector("i").className = division.querySelector("i").className
})
