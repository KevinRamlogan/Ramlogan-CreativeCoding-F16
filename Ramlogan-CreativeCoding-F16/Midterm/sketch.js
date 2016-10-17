//Kevin Ramlogan 
//Creative Coding Midterm
//kaleidoscope- Drawing Tool

var colorOne=0;
var colorTwo=0;
var ColorThree=0;
var theSizeX =0;
var theSizeY=0;
var	mouseDeltaX=0;
var mouseDeltaY=0;
var rotAmount = 0;
var back = 0;

function setup(){
	createCanvas(500,500);
	background(back);
}	

function draw(){


	push();
	filling();
	stroke(colorOne,colorTwo,ColorThree);
	lines();
	pop();
	
//center
	push();
	everything();
	pop();
//bot Right
	push();
	translate(width/2,height/2);
	everything();
	pop();
//mid bot
	push();
	translate(0,height/2);
	everything();
	pop();
//mid right
	push();
	translate(width/2,0);
	everything();
	pop();	
//mid left
	push();
	translate(-width/2,0);
	everything();
	pop();	
//bot left
	push();
	translate(-width/2,height/2);
	everything();
	pop();
//top mid
	push();
	translate(0,-height/2);
	everything();
	pop();
//top left
	push();
	translate(-width/2,-height/2);
	everything();
	pop();
//top right
	push();
	translate(width/2,-height/2);
	everything();
	pop();
}
//lines created to divide main kaleidoscope fields
function lines(){

	setColors();
	stroke(colorOne,colorTwo,colorThree);
	//lines used to divide the space
	//line(0,0,500,500);
	//line(0,500,500,0);
	//line(0,250,500,250);
	//line(250,0,250,500);

	
}
function circles(){
	theSizeX=map(mouseX,0,500,1,400);
	theSizeY=map(mouseY,0,500,1,400);
	ellipse(height/2,width/2,theSizeX/3,theSizeY/3);
	
}
function circlesTwo(){
	theSizeX=map(mouseX,0,500,1,400);
	theSizeY=map(mouseY,0,500,1,400);
	ellipse(height/2,width/2,theSizeX/2,theSizeY/2);

}

function squares (){
	theSizeX=map(mouseX,0,500,1,400);
	theSizeY=map(mouseY,0,500,1,400);
	rect(height/2,width/2,theSizeX,theSizeY);
}

function setColors(){
	colorOne = map(mouseX,0,500,0,255);
	colorTwo = map(mouseY,0,500,0,255);
	colorThree = map(mouseX,mouseY,500,0,255);}

function setColorsTwo(){
	colorOne = map(mouseX,0,500,0,70);
	colorTwo = map(mouseY,0,500,0,255);
	colorThree = map(mouseX,mouseY,500,0,255);

}


function filling(){
	mouseSpeed();
	if (mouseDeltaX<10){
	setColors();
		fill(colorOne,colorTwo,ColorThree);
}
	if(mouseDeltaX>50){
	setColors();
		fill(0);

	if (mouseDeltaY>50){
	setColors();
		fill(0);
	if (mouseDeltaY<10){
	setColors();
		fill(colorThree,colorTwo,colorOne);
	}
	}
	
}
}

function fillingTwo(){
mouseSpeed();
	if (mouseDeltaX<49){
	setColorsTwo();
		fill(colorOne,colorThree,colorTwo);
}
	if(mouseDeltaX>50){
	setColorsTwo();
		fill(255);}

	if (mouseDeltaY>50){
	setColorsTwo();
		fill(255);
	}
	if (mouseDeltaY<49){
	setColorsTwo();
		fill(colorOne,colorThree,colorTwo);
	}
}

function colorField(){
	filling();
	circles();
}

function colorFieldTwo(){
	fillingTwo();
	noStroke();
	circlesTwo();
}	

function mouseSpeed(){
	mouseDeltaX=abs(mouseX-pmouseX);
	mouseDeltaY=abs(mouseY-pmouseY);
}

function revColorField(){
	theSizeX=map(mouseX,0,500,1,400);
	theSizeY=map(mouseY,0,500,1,400);
	ellipse(height/2,width/2,theSizeX,theSizeY);
}
	

function circleMoving(){
	filling();
	ellipse(width/2,height/2,mouseY/2,mouseX/2);

}

function shapeMoving(){
	translate(width/2,height/2);
	rotAmount= map(mouseX,mouseY,width/2,0,PI*10);
	rotate(rotAmount);
	filling();
	ellipse(0,0,50,10);


	ellipse(100,100,30,30);
	ellipse(100,50,30,20);
}

function everything(){
	colorField();
	colorFieldTwo();
	circleMoving();
	shapeMoving();

}


