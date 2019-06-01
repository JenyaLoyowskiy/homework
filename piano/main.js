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
    let item  = pianoKey[i];
    if (item[0] == keyCode) {
      let sound = new Audio('piano-master/'+item[1]+'.mp3');
      sound.play();
    }
  }
});
