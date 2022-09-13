
const PomodoroCiclo = {
  cicle: 2,
  pauseMinutes:1,
  WorkMinutes: 2
}

function PomodoroCounter(PomodoroCiclo){
  let countMinutes = 0
  let countSecond = 0

  const timer = setInterval(()=> {
    if(PomodoroCiclo.cicle > 1 && countMinutes === 2){
      PomodoroCiclo.cicle -= 1
      countMinutes = 0
      countSecond = 0
    }

    countMinutes < PomodoroCiclo.WorkMinutes ? countSecond += 1 : clearInterval(timer)
    console.log(`${countMinutes}:${countSecond} Ciclo: ${PomodoroCiclo.cicle}`)

    if(countSecond === 60){
      countMinutes += 1
      countSecond = 0
    }

  }, 1000)
}

PomodoroCounter(PomodoroCiclo)

