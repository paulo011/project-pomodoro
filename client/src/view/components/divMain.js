class Div{
  constructor(id){
    this.element = document.createElement("div")
    this.element.id = id
  }
  addChild(child){
    this.element.appendChild(child)
  }
}
