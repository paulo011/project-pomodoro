class Pomodoro{
  constructor(cicle, workMinutes, timer){
  this.cicle = cicle,
  this.workMinutes = workMinutes
  this.countMinutes = 0
  this.countSecond = 0
  this.timer = timer
  }

  counter(showCounter) {

    const count =  setInterval(()=> {
      if (this.countMinutes < 10 && this.countSecond < 10){
        showCounter.innerText = `0${this.countMinutes}:0${this.countSecond}`
      }else if(this.countSecond < 10){
        showCounter.innerText = `${this.countMinutes}:0${this.countSecond}`
      }else if(this.countMinutes < 10){
        showCounter.innerText = `0${this.countMinutes}:${this.countSecond}`
      }else{
        showCounter.innerText = `${this.countMinutes}:${this.countSecond}`
      }

      if(this.cicle > 1 && this.countMinutes === this.workMinutes){
        this.cicle -= 1
        this.countMinutes = 0
        this.countSecond = 0
      }

      this.countMinutes < this.workMinutes ? this.countSecond += 1 : clearInterval(count)

      if(this.countSecond === 60){
        this.countMinutes += 1
        this.countSecond = 0
      }
    }, 1000)
  }
}

