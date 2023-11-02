const button=document.createElement("button");
const modalContainer=document.createElement("div")
const modalHead=document.createElement("div")
const modalMain=document.createElement("div")
const modalFooter=document.createElement("div")
const text=document.createElement("p")
const closeButton=document.createElement("button")
const title=document.createElement("h5")

modalContainer.classList.add("modalContainer")
modalHead.classList.add('modalHead')
modalMain.classList.add('modalMain')
modalFooter.classList.add('modalFooter')
closeButton.classList.add('closeButton')
button.classList.add('btn')
document.body.append(button,modalContainer)
modalContainer.append(modalHead,modalMain,modalFooter)
modalHead.appendChild(title)
modalMain.appendChild(text)
modalFooter.append(closeButton)

button.textContent="Get Modal"
title.textContent="Modal Title"
text.textContent="Woohoo, you're reading this text in a modal"
closeButton.textContent="Close"


button.addEventListener("click",()=>{
    modalContainer.classList.toggle("show")

})


closeButton.addEventListener("click" ,()=>{
    modalContainer.classList.toggle("show")
})