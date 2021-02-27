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
let boxBody3 = document.querySelectorAll(".box-body")[3]
let valeur6 = boxBody3.querySelectorAll("input")[0]
let valeur7 = boxBody3.querySelectorAll("input")[1]
let egale3 = boxBody3.querySelector("div > button")
let reponse3 = boxBody3.querySelectorAll("span")[1]
let onOff = false

// Decimal
let button = boxBody3.querySelectorAll("#numbersExo4 > button")
let b1 =  button[0]
let b2 =  button[1]
let b3 =  button[2]
let b4 =  button[3]
let b5 =  button[4]
let b6 =  button[5]
let b7 =  button[6]
let b8 =  button[7]
let b9 =  button[8]
let b0 =  button[9]

// Evenement Decimal
b1.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "1"
    } else {
        valeur7.value += "1"
    }
        
})
b2.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "2"
    } else {
        valeur7.value += "2"
    }
})
b3.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "3"
    } else {
        valeur7.value += "3"
    }
})
b4.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "4"
    } else {
        valeur7.value += "4"
    }
})
b5.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "5"
    } else {
        valeur7.value += "5"
    }
})
b6.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "6"
    } else {
        valeur7.value += "6"
    }
})
b7.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "7"
    } else {
        valeur7.value += "7"
    }
})
b8.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "8"
    } else {
        valeur7.value += "8"
    }
})
b9.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "9"
    } else {
        valeur7.value += "9"
    }
})
b0.addEventListener("click", () =>{
    if (onOff === false) {
        valeur6.value += "0"
    } else {
        valeur7.value += "0"
    }
})

// operator
let operator = boxBody3.querySelectorAll("#operatorsExo4 > button")
let addition0 = operator[0]
let soustraction0 = operator[1]
let multiplication0 = operator[2]
let division0 = operator[3]

//Symbol
let i0 = boxBody3.querySelector("div > span")

// Addition
addition0.addEventListener("click", () => {
    reponse3.innerText = parseInt(valeur6.value) + parseInt(valeur7.value)
    i0.querySelector("i").className = addition0.querySelector("i").className
    onOff= true
    egale3.addEventListener("click", () =>{
        parseInt(valeur6.value) + parseInt(valeur7.value)
    })
})
// Soustraction
soustraction0.addEventListener("click", () => {
    reponse3.innerText = parseInt(valeur6.value) - parseInt(valeur7.value)
    i0.querySelector("i").className = soustraction0.querySelector("i").className
    onOff= true
})
// Multiplication
multiplication0.addEventListener("click", () => {
    reponse3.innerText = parseInt(valeur6.value) * parseInt(valeur7.value)
    i0.querySelector("i").className = multiplication0.querySelector("i").className
    onOff= true
})
// Division
division0.addEventListener("click", () => {
    reponse3.innerText = parseInt(valeur6.value) / parseInt(valeur7.value)
    i0.querySelector("i").className = division0.querySelector("i").className
    onOff= true
})

// En Cas De Rectification
valeur6.addEventListener ("click", () => {
    onOff = false
})
valeur7.addEventListener ("click", () => {
    onOff = true
})

// Resultat
egale3.addEventListener