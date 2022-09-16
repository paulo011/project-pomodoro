const app = document.querySelector("#timer-view")
const button = document.querySelector("#button")
const text = "0:0"

function timer (){
  button.textContent = "Stop"
  button.addEventListener("click", ()=>{
    button.textContent = 'Start'
  })

  const counter = setInterval(()=> {
  if(button.textContent === "Start") clearInterval(counter)
  app.insertAdjacentText("beforeend", text)
  },1000)
}

function start(){
  if(button.textContent !== "Stop") button.addEventListener("click",timer)
}

start()
