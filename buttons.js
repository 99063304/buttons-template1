
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var img0 = document.getElementById('img0');



var sombutton1 =0;
var sombutton2 =0;
var sombutton3 =0;



button1.addEventListener('click', button1f);
button2.addEventListener('click', button2f);
button3.addEventListener('click', button3f);


function button1f() {
  img0.src = 'images/bg1.jpg';
  img0k.src = 'images/1.jpg';
  sombutton1++;
  button1.innerHTML = sombutton1;

  console.log('button1f');
}
function button2f() {
  img0.src = 'images/bg2.jpg';
  img0k.src = 'images/2.jpg';
  sombutton2++;
  button2.innerHTML = sombutton2;

  console.log('button2f');
}
function button3f() {
  img0.src = 'images/bg3.jpg';
  img0k.src = 'images/3.jpg';
  sombutton3++;
  button3.innerHTML = sombutton3;

  console.log('button3f');
}
