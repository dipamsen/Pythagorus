var scl = 20;
var x, y;
var n1, n2;
var i1, i2, go;
var longer;
var stuff = [];

function pushHTML() {
  var html = createElement('p');
  html.html("Source Code: <a href='https://github.com/dipamsen/Pythagorus'>Github</a>");
  stuff.push(html);
}

function setup() {
  createCanvas(300, 300);
  textFont('sans-serif');
  textAlign(CENTER, CENTER);
  var html = createElement('p');
  html.html("Enter two numbers");
  stuff.push(html);
  //angleMode(DEGREES);
  i1 = createInput();
  i2 = createInput();
  go = createButton('GO')
  i1.style('width', '80px');
  i2.style('width', '80px');
  pushHTML();
  textSize(20);
}

function draw() {
  stroke(255);
  x = 30;
  y = height - 30;
  strokeWeight(3);
  background(51);
  if (n1 && n2) {
    drawLine(n1, n2);
    if (n1 > n2) {
      longer = n1;
    } else {
      longer = n2;
    }
    noFill();
    stroke(255);
    rect(x, y, 20, -20);
    scl = (width - 60) / (longer);
  write(n1, n2, sqrt(n1**2+n2**2));
    
  }
  go.mousePressed(updateValues);
  //console.log(scl, longer)
}

function write(a, b, c) {
  noStroke();
  fill(255);
  push();
  translate(x - 15, y - (n1 * scl) / 2);
  rotate(-PI/2);
  text(a, 0, 0)
  pop();
  push();
  text(b, x + (n2 * scl) / 2, y + 15)
  pop();
  push();
  translate(x + (n2 * scl) / 2 + 10, y - (n1 * scl) / 2 -10);
  rotate(atan(n1/n2));
  text(c, 0, 0)
  pop();
}


function drawLine(a, b) {
  stroke("white");
  line(x, y, x + (b * 0), y - (a * scl));
  line(x, y, x + (b * scl), y - (a * 0));
  stroke("red");
  line(x + (b * 0), y - (a * scl), x + (b * scl), y - (a * 0))
}

function updateValues() {
  n1 = int(i1.value());
  n2 = int(i2.value());
}