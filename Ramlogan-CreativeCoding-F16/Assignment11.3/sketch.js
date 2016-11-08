var shapeArray= [];
var _x;
var _y;
var _vel;
var _yVel;
var _size;
var _mySound;
var _mySoundTwo;
var _longPiano;
var _pKeyOne;

function preload(){
  _mySound=loadSound("Assets/Chant1.mp3");
  _mySoundTwo= loadSound("Assets/Chant2.mp3");
  _longPiano=loadSound("Assets/LongPiano.wav");
  _pKeyOne=loadSound("Assets/PKeyOne.wav");
}
function setup(){
		createCanvas(600,600);
		background(random(0,255),random(0,100),random(125,200));
		for(var i = 0;i<5;i++){
			shapeArray[i]= new Shape(random(0,width),random(0,height),2,2,30,_mySound,_mySoundTwo,_longPiano,_pKeyOne);
		}
}
function draw(){
	
	for (var i =0; i<shapeArray.length;i++){
		shapeArray[i].animate();
		shapeArray[i].display();
		
		if (dist(shapeArray[i].x,shapeArray[i].y,mouseX,mouseY)<15) {
			_mySoundTwo.play();
			fill(random(0,200),random(100,200), random(50,255));
		}
	}
}

function mouseClicked(){
	var tempShape = new Shape(mouseX,mouseY,random(1,3),random(1,3),40,_mySound,_mySoundTwo,_longPiano,_pKeyOne);
	shapeArray.push(tempShape);
	_mySound.play();	


}
function mousePressed(){
	var newShape = new Shape(random(0,length),random(0,height),random(0,10),random(1,10),random(100,200),_mySound,_mySoundTwo,_longPiano,_pKeyOne);
	shapeArray.push(newShape);
}



function Shape (_x,_y,_vel,_yVel,_size,_mySound,_mySoundTwo,_longPiano,_pKeyOne){
	this.x=_x;
	this.y=_y;
	this.vel=_vel;
	this.yVel= _yVel;
	this.size = _size;
	this.mySound=_mySound;
	this.mySoundTwo=_mySoundTwo;
	this.longPiano= _longPiano;
	this.pKeyOne=_pKeyOne;

	this.animate = function(){
		this.x += this.vel;
	
			if (this.x>width || this.x< 0){
				this.vel=-this.vel;
				
				stroke(random(0,200),random(100,200), random(50,255))
				
				this.longPiano.play();
				
			}
			this.y+=this.yVel;
			if(this.y>height || this.y<=0){
				this.yVel=-this.yVel;
				
				this.pKeyOne.play();
							}
			if (mouseX ==this.x || mouseY==this.y){
				this.mySoundTwo.play();
			}
	
	this.display = function(){
		rect(this.x,this.y,this.size,this.size);


	}

}
	};






