var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');

var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');

var button10 = document.getElementById('button10');
var button11 = document.getElementById('button11');
var button12 = document.getElementById('button12');

var img0 = document.getElementById('img0');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');


var sombutton1 =1;
var sombutton2 =2;
var sombutton3 =3;

var sombutton4 =1;
var sombutton5 =2;
var sombutton6 =3;

var sombutton7 =1;
var sombutton8 =2;
var sombutton9 =3;

var sombutton10 =1;
var sombutton11 =2;
var sombutton12 =3;


button1.addEventListener('click', button1f);
button2.addEventListener('click', button2f);
button3.addEventListener('click', button3f);

button4.addEventListener('click', button4f);
button5.addEventListener('click', button5f);
button6.addEventListener('click', button6f);

button7.addEventListener('click', button7f);
button8.addEventListener('click', button8f);
button9.addEventListener('click', button9f);

button10.addEventListener('click', button10f);
button11.addEventListener('click', button11f);
button12.addEventListener('click', button12f);

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
function button4f() {
  img1.src = 'images/bg1.jpg';
  img1k.src = 'images/1.jpg';
  sombutton4++;
  button4.innerHTML = sombutton4;


}
function button5f() {
  img1.src = 'images/bg2.jpg';
  img1k.src = 'images/2.jpg';
  sombutton5++;
  button5.innerHTML = sombutton2;


}
function button6f() {
  img1.src = 'images/bg3.jpg';
  img1k.src = 'images/3.jpg';
  sombutton6++;
  button6.innerHTML = sombutton6;
}
function button7f() {
  img2.src = 'images/bg1.jpg';
  img2k.src = 'images/1.jpg';
  sombutton7++;
  button7.innerHTML = sombutton7;

}
function button8f() {
  img2.src = 'images/bg2.jpg';
  img2k.src = 'images/2.jpg';
  sombutton8++;
  button8.innerHTML = sombutton8;


}
function button9f() {
  img2.src = 'images/bg3.jpg';
  img2k.src = 'images/3.jpg';
  sombutton9++;
  button9.innerHTML = sombutton9;
}
function button10f() {
  img3.src = 'images/bg1.jpg';
  img3k.src = 'images/1.jpg';
  sombutton10++;
  button10.innerHTML = sombutton10;

}
function button11f() {
  img3.src = 'images/bg2.jpg';
  img3k.src = 'images/2.jpg';
  sombutton11++;
  button11.innerHTML = sombutton8;


}
function button12f() {
  img3.src = 'images/bg3.jpg';
  img3k.src = 'images/3.jpg';
  sombutton12++;
  button12.innerHTML = sombutton12;
}
