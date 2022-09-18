class RenderTimer{
  constructor(renderComponents){
    this.renderComponents = renderComponents
    this.renderComponents.button
    this.renderComponents.timer
  }

  render(){
    const buttonStart = document.querySelector("#button-start")
    const buttonStop = document.querySelector("#button-stop")
    const timer = document.querySelector(".timer")
    let cicle = 2
    let workMinutes = 2
    let second = 0
    let minutes = 0

    buttonStart.addEventListener("click",() => {

      const count =  setInterval(()=> {
        buttonStop.addEventListener("click",()=> clearInterval(count)
)
        if (minutes < 10 && second < 10){
          timer.innerText = `0${minutes}:0${second}`
        }else if(second < 10){
          timer.innerText = `${minutes}:0${second}`
        }else if(minutes < 10){
          timer.innerText = `0${minutes}:${second}`
        }else{
          timer.innerText = `${minutes}:${second}`
        }

        if(cicle > 1 && minutes === workMinutes){
          cicle -= 1
          minutes = 0
          second = 0
        }

        minutes < workMinutes ? second += 1 : clearInterval(count)

        if(second === 60){
          minutes += 1
          second = 0
        }
      }, 1000)
    })
  }
}
