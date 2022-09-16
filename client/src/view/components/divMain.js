class Div{
  constructor(id){
    this.element = document.querySelector("#app")
    this.element.id = id
  }
  addChild(child){
    this.element.appendChild(child)
  }
}
