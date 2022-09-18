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
    this.titleWorkSession = new Header("h3", "title-work-session", "Work Session")
    this.app.addChild(this.titleWorkSession.element)
    this.selectWorkSession = new Select('select-work-session', "select-work-session")
    let interatorWork = 10
    while(interatorWork <= 60){
      this.selectWorkSession.addOptions(new OptionsSelect(interatorWork, `${interatorWork} Minutes`))
      interatorWork += 5
    }
    this.selectWorkSession.addChild(this.selectWorkSession.options)
    this.app.addChild(this.selectWorkSession.element)

    this.titleShortBreak= new Header("h3", "title-short-break", "Short Break")
    this.app.addChild(this.titleShortBreak.element)
    this.selectShortBreak = new Select('select-short-break', "Select Short Break")
    let interatorBreak = 5
    while (interatorBreak <= 30){
      this.selectShortBreak.addOptions(new OptionsSelect(interatorBreak, `${interatorBreak} Minutes`))
      interatorBreak += 5
    }
    this.selectShortBreak.addChild(this.selectShortBreak.options)
    this.app.addChild(this.selectShortBreak.element)

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
