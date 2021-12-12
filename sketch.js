var canvas1;
var canvas2;
var canvas3;
var titlefont;

var sketch1 = function (p) {
  p.x = 100;
  p.y = 100;

  // p.preload = function () {};
  // let textfont = p.loadFont("index/font-family: 'Readex Pro', sans-serif;");

  p.setup = function () {
    let canvas1 = p.createCanvas(1500, 300);
    canvas1.background(215, 128, 229);
    canvas1.position(50, 50);
  };

  p.draw = function () {
    p.fill(0);
    p.noStroke();
    p.textSize(100);
    p.text("African American History", 20, 100);
    p.text("Through Art", 100, 200);
  };
};
var myp5 = new p5(sketch1, "c1");

var sketch2 = function (p) {
  p.x = 100;
  p.y = 100;

  p.preload = function () {};
  let image1 = p.loadImage("images/IMG_2223.png");

  p.setup = function () {
    let canvas2 = p.createCanvas(1500, 1000);
    canvas2.background(200);
    canvas2.position(50, 400);
    let div = p.createDiv(
      "During the late 1800’s the U.S. was divvying itself up into free and slave states, with events such as the Missouri compromise deciding the fates and freedoms of many African-Americans. During this time, black people were highly oppressed. The outcome of State v Mann rules that slave owners had complete control and authority of their slaves’ bodies, meaning they could be subject to unimaginable amounts of work and abuse. However John v. State rules that the killing of a white person by a slave was murder. The inequality of human rights, the lack of freedoms, and the outright abuse towards African-Americans led to many uprisings, including Nat Turner’s Rebellion, but they were to be defeated constantly. This was a time for survival of the body and soul, through family, fictive kin, religious awakening and quiet and raging resistance. "
    );
    div.position(100, 100);
    div.size(1000, 1000);
  };

  p.draw = function () {
    p.fill(100, 20, 50);
    p.image(image1, 50, 150);
  };
};
var myp5 = new p5(sketch2, "c2");

/*var sketch3 = function (p) {
  p.x = 100;
  p.y = 100;

  p.setup = function () {
    let canvas3 = p.createCanvas(1500, 1000);
    canvas3.background(30, 50, 80);
    canvas3.position(50, 1500);
  };

  p.draw = function () {
    p.textsize(80);
    p.text("Something Else");
  };
};
var myp5 = new p5(sketch3);*/
