let imgCup = document.querySelector(".big-cup");
let green = document.querySelector(".green-cup");
let yellow = document.querySelector(".yellow-cup");
let pink = document.querySelector(".pink-cup");
let circle = document.querySelector(".circle")
let span = document.querySelector("span")
let button = document.querySelector("button")

green.addEventListener("click", ()=>{
    imgCup.src = "imgs/img1.png"
    circle.style.background = "#017143"
    span.style.color = "#017143"
    button.style.backgroundColor = "#017143"
})

yellow.addEventListener("click", ()=>{
    imgCup.src = "imgs/img2.png"
    circle.style.background = "#ffa500"
    span.style.color = "#ffa500"
    button.style.backgroundColor = "#ffa500"
})

pink.addEventListener("click", ()=>{
    imgCup.src = "imgs/img3.png"
    circle.style.background = "#eb7495"
    span.style.color = "#eb7495"
    button.style.backgroundColor = "#eb7495"
    
})

button.addEventListener("click", ()=>{
    alert("Obrigado pelo like!")
})