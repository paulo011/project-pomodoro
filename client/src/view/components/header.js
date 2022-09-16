class Header{
  constructor(type, className, innerText){
    this.element = document.createElement(type)
    this.element.className = className
    this.element.innerText = innerText
  }
}

