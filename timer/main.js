const container = document.querySelector('#main');

class timer {
  constructor(duration, isGoing = false, tick = 1){
    this.duration = duration;
    this.currentTime = duration;
    this.isGoing = isGoing;
    this.tick = tick;
    this.render();
    this.cheker();
    if (this.isGoing) {
      this.count()
      this.button.innerText = "stop";
    }
  }

  createOutput() {
      this.output = document.createElement("div");
      this.output.classList.add("index");
      this.output.innerText = this.currentTime;
      return this.output;
  }

  //метод класса отрисовывает progress bar
  createLine() {
      this.line = document.createElement("div");
      this.line.classList.add("line");
      return this.line;
  }

  //метод класса отрисовывает button
  createButton() {
      this.button = document.createElement("button");
      this.button.classList.add("button");
      this.button.innerText = "Start";
      this.button.onclick = this.buttonHandler;
      return this.button;
  }

  //метод отрисовывает элементы на страницу
  render() {
      container.append(this.createOutput());
      container.append(this.createLine());
      container.append(this.createButton());
  }


  count(){
    this.timer = setInterval(()=>{
      if(this.currentTime<=0){
        this.stopCount();
        this.button.innerText = "again";
        this.button.onclick(this.currentTime = this.duration+1);
      }else{
      this.currentTime-=this.tick;
      this.output.innerText = this.currentTime;
      let width = 100*(this.currentTime/this.duration);
      this.line.style.width = width + "%";}
    },this.tick*1000);
  }


  stopCount(){
    clearInterval(this.timer)
  }


  cheker(){
    this.button.addEventListener('click', ()=>{
      this.isGoing = !this.isGoing;
      if(this.isGoing){
        this.button.innerText = "stop";
        this.count();
      }else{
        this.stopCount();
        this.button.innerText = "start";
      }
    })
  }
}

new timer(10);
new timer(180, true, 3);
