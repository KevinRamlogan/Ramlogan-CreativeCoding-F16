//Assignment 10.25- Kevin
var circleSize; 
var xPos; 
var yPos; 
var xVel; 
var yVel;
var xDirection;
var yDirection;
var mySound;
var mySoundTwo;
//some extra vars for color 
var fillOne;
var fillTwo;
var fillThree;

function preload(){
  mySound=loadSound("Assets/Chant1.mp3");
  mySoundTwo= loadSound("Assets/Chant2.mp3");
}
function setup(){
  createCanvas(600,600);


  circleSize = 100;
  xPos = 150; 
  yPos = 200;
  xVel = 2;
  yVel = 3;
  xDirection = 1; 
  yDirection = 1;

}

function draw(){
  
  shapeMove();

function shapeMove(){
  ellipse(xPos, yPos, circleSize, circleSize);
  xPos = xPos + xVel;
  yPos = yPos + yVel;

  if (xPos >= width || xPos <= 0){
    xDirection = -xDirection;
    xVel = xVel * xDirection;
    mySound.play();
    setColors();
    background(fillOne,fillTwo,fillThree);
    stroke(fillOne,fillTwo,fillOne);
  }
  if(yPos >= height || yPos <= 0){
    yDirection = -yDirection;
    yVel = yVel * yDirection;
    mySoundTwo.play();
    setColors();
    background(fillOne,fillTwo,fillThree);

  }
  
}
}
function setColors(){
  fillOne = map(xPos,0,600,0,255);
  fillTwo = map(yPos,0,600,0,255);
  fillThree = map(yPos,0,600,0,255);
  
}