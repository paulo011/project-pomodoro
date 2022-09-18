class Select{
  constructor(className, name){
    this.element = document.createElement('select')
    this.element.className = className
    this.element.name = name
    this.options = []
  }

  addOptions(instenceOption){
    this.options.push(instenceOption)
  }

  addChild(options){
    options.forEach(e => this.element.appendChild(e.element))
  }
}

class OptionsSelect {
  constructor(value, textContent){
    this.element = document.createElement('option')
    this.element.value = value
    this.element.textContent = textContent
  }
}
