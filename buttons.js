var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button0 = document.getElementById('button0');
var img0 = document.getElementById('img0');

var button1 = document.getElementById('img1k');
var button2 = document.getElementById('img2k');
var button3 = document.getElementById('img3k');
var button0 = document.getElementById('img0k');

button1.addEventListener('click', button1f);
button2.addEventListener('click', button2f);
button3.addEventListener('click', button3f);

function button1f() {
    img0.src = 'images/bg1.jpg';
    img0k.src = 'images/1.jpg';
    console.log('button1f');
  }
function button2f() {

  }
function button3f() {

  }
function button0f() {

}
