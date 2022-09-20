class Button{
  constructor(className, textContent){
    this.element = document.createElement("button")
    this.element.className = className
    this.element.textContent = textContent
  }
}
