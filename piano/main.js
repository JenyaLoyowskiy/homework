let a = document.getElementById('1');
let s = document.getElementById('2');
let d = document.getElementById('3');
let f = document.getElementById('4');
let g = document.getElementById('5');
let h = document.getElementById('6');
let j = document.getElementById('7');
let k = document.getElementById('8');

const sound_a = new Audio('piano-master/1.mp3');
const sound_s = new Audio('piano-master/2.mp3');
const sound_d = new Audio('piano-master/3.mp3');
const sound_f = new Audio('piano-master/4.mp3');
const sound_g = new Audio('piano-master/5.mp3');
const sound_h = new Audio('piano-master/6.mp3');
const sound_j = new Audio('piano-master/7.mp3');
const sound_k = new Audio('piano-master/8.mp3');

function playSound_a() {
  sound_a.play();
  setTimeout(function(){
    a.classList.remove('selected');
  },200);
    a.classList.add('selected')
}
function playSound_s() {
  sound_s.play();
  setTimeout(function(){
    s.classList.remove('selected');
  },200);
    s.classList.add('selected')
}
function playSound_d() {
  sound_d.play();
  setTimeout(function(){
    d.classList.remove('selected');
  },200);
    d.classList.add('selected')
}
function playSound_f() {
  sound_f.play();
  setTimeout(function(){
    f.classList.remove('selected');
  },200);
    f.classList.add('selected')
}
function playSound_g() {
  sound_g.play();
  setTimeout(function(){
    g.classList.remove('selected');
  },200);
    g.classList.add('selected')
}
function playSound_h() {
  sound_h.play();
  setTimeout(function(){
    h.classList.remove('selected');
  },200);
    h.classList.add('selected')
}
function playSound_j() {
  sound_j.play();
  setTimeout(function(){
    j.classList.remove('selected');
  },200);
    j.classList.add('selected')
}
function playSound_k() {
  sound_k.play();
  setTimeout(function(){
    k.classList.remove('selected');
  },200);
    k.classList.add('selected')
}
a.addEventListener('click', playSound_a);
s.addEventListener('click', playSound_s);
d.addEventListener('click', playSound_d);
f.addEventListener('click', playSound_f);
g.addEventListener('click', playSound_g);
h.addEventListener('click', playSound_h);
j.addEventListener('click', playSound_j);
k.addEventListener('click', playSound_k);

window.addEventListener('keydown', ({keyCode}) => {
  if(keyCode == 65) return playSound_a();
  if(keyCode == 83) return playSound_s();
  if(keyCode == 68) return playSound_d();
  if(keyCode == 70) return playSound_f();
  if(keyCode == 71) return playSound_g();
  if(keyCode == 72) return playSound_h();
  if(keyCode == 74) return playSound_j();
  if(keyCode == 75) return playSound_k();
});
