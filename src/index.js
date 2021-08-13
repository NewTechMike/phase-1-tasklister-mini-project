document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    doSomething(e.target["new-task-description"].value)
    form.reset()
  })
});

//Creating a dropdown select
let form = document.querySelector("#create-task-form")
let dropdown = document.createElement("select")
form.children[1].insertAdjacentElement("afterend", dropdown)
//Dropdown changing the priority of the tasks
const highPri = document.createElement("option")
highPri.innerText = "High"
dropdown.append(highPri)
highPri.style.color 
const medPri = document.createElement("option")
medPri.innerText = "Medium"
dropdown.append(medPri)
const lowPri = document.createElement("option")
lowPri.innerText = "Low"
dropdown.append(lowPri)



function doSomething(something){
  
  let p = document.createElement("p")
  let btn = document.createElement('Button')
  let pri = form.children[2].value
  const color = colorPri(pri)
  p.style.color = color
  
  btn.addEventListener('click', removeSomething)
  btn.textContent = 'X'
  p.textContent = `${something} `
  p.appendChild(btn)
  
  document.querySelector("#tasks").appendChild(p) 
}

function removeSomething(e){
  e.target.parentNode.remove();
}

function colorPri(priority){
  if(priority === "High"){
    return "red"
  }else if(priority === "Medium"){
    return "yellow"
  }else {
    return "green"
  }
}