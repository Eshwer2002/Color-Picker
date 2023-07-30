let btn = document.querySelector("button");

btn.onclick = function(){
  var red = Math.round(Math.random()*255);
  var green = Math.round(Math.random()*255);
  var blue = Math.round(Math.random()*255);

  var color = 'rgb('+ red + ',' + green + ',' + blue + ')';

  document.body.style.backgroundColor = color;
  document.getElementById('color').innerHTML = color;
  document.getElementById('output').innerHTML = color;

  document.getElementById('red').value = red;
  document.getElementById('green').value = green;
  document.getElementById('blue').value = blue;
}


function colors(){
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;

  document.body.style.backgroundColor = 'rgb(' + red +','+ green + ',' + blue + ')';
  document.getElementById('color').innerHTML = 'rgb(' + red +','+ green + ',' + blue + ')';
  document.getElementById('output').innerHTML = 'rgb(' + red +','+ green + ',' + blue + ')';

}
