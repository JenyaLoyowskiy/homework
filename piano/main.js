const keys = document.querySelectorAll('.key');

keys.forEach((key)=>  {
  key.addEventListener('click', ()=>{
    let sound = new Audio('piano-master/'+key.id+'.mp3');
    sound.play();
  })
})
const pianoKey = [[65, 1],[83, 2],[68, 3],[70, 4],[71, 5],[72, 6],[74, 7],[75, 8]];

window.addEventListener('keydown', ({keyCode}) => {
  for (let i = 0; i < pianoKey.length; i++) {
    let keyNumber  = pianoKey[i];
    if (keyNumber[0] == keyCode) {
      let sound = new Audio('piano-master/'+keyNumber[1]+'.mp3');
      document.getElementById(keyNumber[1]).classList.add('red');
      sound.play();
      setTimeout(()=>{
      document.getElementById(keyNumber[1]).classList.remove('red');
    },100)
    }
  }
});
