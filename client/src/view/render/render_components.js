class RenderComponents{
  constructor(){
    this.app = new Div("app")
    this.timer = {}
    this.button = {}

  }

  renderOptions(){
    this.app = new Div("app")
    this.headerMain = new Header("h1","header-main","Pomodoro")
    this.app.addChild(this.headerMain.element)
    this.titleTimeWork = new Header("h3", "title-time-work", "Time Work")
    this.app.addChild(this.titleTimeWork.element)
    this.selectTimeWork = new Select('start-timer', "start-timer")
    let interatorStart = 10
    while(interatorStart <= 60){
      this.selectTimeWork.addOptions(new OptionsSelect(interatorStart, `${interatorStart} Minutes`))
      interatorStart += 5
    }
    this.selectTimeWork.addChild(this.selectTimeWork.options)
    this.app.addChild(this.selectTimeWork.element)

    this.titleBreak= new Header("h3", "title-break", "Break")
    this.app.addChild(this.titleBreak.element)
    this.selectBreak = new Select('select-break', "Break")
    let interatorBreak = 5
    while (interatorBreak <= 30){
      this.selectBreak.addOptions(new OptionsSelect(interatorBreak, `${interatorBreak} Minutes`))
      interatorBreak += 5
    }
    this.selectBreak.addChild(this.selectBreak.options)
    this.app.addChild(this.selectBreak.element)

    this.titleCicle = new Header("h3", "title-cicle", "Cicle")
    this.app.addChild(this.titleCicle.element)
    this.selectCicle = new Select("select-cicle", "Cicle")
    let interatorCicle = 2
    while(interatorCicle <= 10){
      this.selectCicle.addOptions(new OptionsSelect(interatorCicle, `${interatorCicle} Cicle`))
      interatorCicle += 1
    }
    this.selectCicle.addChild(this.selectCicle.options)
    this.app.addChild(this.selectCicle.element)

    this.button = new Button("button-start", 'Start')
    this.app.addChild(this.button.element)
    const elementButton = document.querySelector("#button-start")

    this.button = new Button("button-stop", 'Stop')
    this.app.addChild(this.button.element)

    this.timer = new Timer("timer", "")
    this.app.addChild(this.timer.element)
    const elementTimer = document.querySelector(".timer")
  }

  hideScreen(){
    elementButton.remove()
  }
}
