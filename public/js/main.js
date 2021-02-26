// Exo 01
let boxBody0 = document.querySelectorAll(".box-body")[0]
let valeur0 = boxBody0.querySelectorAll("input")[0]
let valeur1 = boxBody0.querySelectorAll("input")[1]
let egale0 = boxBody0.querySelector(".btn")
let reponse0 = boxBody0.querySelectorAll("span")[1]


egale0.addEventListener("click", () => {
    reponse0.innerText = parseInt(valeur0.value) + parseInt(valeur1.value)

})

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

// Exo 03
