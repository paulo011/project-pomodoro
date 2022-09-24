class AudioBeep{
  constructor(id, src){
    this.element = document.createElement("audio")
    this.element.id = id
    this.element.src = src
  }
}
