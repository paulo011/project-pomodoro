class Pomodoro{
  constructor(cicle, workMinutes){
  this.cicle = cicle,
  this.workMinutes = workMinutes
  }

  PomodoroCounter(counterRender){
  let countMinutes = 0
  let countSecond = 0

    const timer = setInterval(()=> {

      //TODO parameter to render counter here

      if(this.cicle > 1 && countMinutes === this.workMinutes){
        this.cicle -= 1
        countMinutes = 0
        countSecond = 0
      }

      countMinutes < this.workMinutes ? countSecond += 1 : clearInterval(timer)

      if(countSecond === 60){
        countMinutes += 1
        countSecond = 0
      }

    }, 1000)
  }
} 

//test
const pomo = new Pomodoro(4, 3)
console.log(pomo.PomodoroCounter())
