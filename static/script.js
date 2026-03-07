let display = document.getElementById("display")
let historyList = document.getElementById("historyList")

let operators = ["+","-","*","/","%"]
let memory = 0

function append(value){

let lastChar = display.value.slice(-1)

if(operators.includes(value) && operators.includes(lastChar)){
return
}

if(display.value === "" && operators.includes(value)){
return
}

display.value += value

}

function appendDecimal(){

let lastChar = display.value.slice(-1)

if(lastChar !== "."){
display.value += "."
}

}

function clearDisplay(){

display.value=""

}

function calculate(){

let exp = display.value

exp = exp.replace(/π/g,Math.PI)
exp = exp.replace(/e/g,Math.E)
exp = exp.replace(/sqrt/g,"Math.sqrt")
exp = exp.replace(/sin/g,"Math.sin")
exp = exp.replace(/cos/g,"Math.cos")
exp = exp.replace(/tan/g,"Math.tan")
exp = exp.replace(/log/g,"Math.log")

try{

let result = eval(exp)

let item = document.createElement("li")

item.textContent = display.value + " = " + result

historyList.appendChild(item)

display.value = result

}

catch{

display.value="Error"

}

}

document.addEventListener("keydown",function(e){

let key = e.key
let lastChar = display.value.slice(-1)

if(!isNaN(key)){
display.value += key
}

if(operators.includes(key)){

if(display.value !== "" && !operators.includes(lastChar)){
display.value += key
}

}

if(key==="Enter"){
calculate()
}

if(key==="Backspace"){
display.value = display.value.slice(0,-1)
}

})

function toggleTheme(){

document.body.classList.toggle("light")

}

function toggleHistory(){

document.getElementById("historyModal").classList.toggle("show")

}

function clearHistory(){

historyList.innerHTML=""

}

function memoryClear(){

memory=0

}

function memoryRecall(){

display.value += memory

}

function memoryAdd(){

memory += parseFloat(display.value || 0)

}

function memorySubtract(){

memory -= parseFloat(display.value || 0)

}