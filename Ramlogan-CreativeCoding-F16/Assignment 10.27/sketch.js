var xPos;
var velocity; 
var yPos;
var yVelocity;
var myObject;
var myBallTwo;
var myBallThree;
var sizeOne;
var sizeTwo;

function setup(){
	createCanvas(500,500);
	myObject = new Ball(0,30,2,2,30,30);
	myball = new Ball(50,40,4,2,30,20);
	myBallTwo = new Ball(60,60,3,2,10,30);
	myBallThree = new Ball(70, 70,5,2,15,20);

}
function draw(){

	push();
	stroke(255,0,100);
	//fill(255,0,200);
	myObject.animate();
	myObject.display();

	pop();
	push();
	stroke(0,255,100);
	myball.animate();
	myball.display();
	pop();
	push();
	stroke(0,100,255);
	myBallTwo.animate();
	myBallTwo.display();
	pop();
	push();
	stroke(100,0,255);
	myBallThree.animate();
	myBallThree.display();
	pop();

	
}
/* function TestClass(xVal,yVal){
	this.x= xVal;
	this.y= yVal;

	this.show = function(){

		ellipse(this.x,this.y,30,30);
	}
};
function animate(){
	//ellipse(xPos,xPos,100,100);
	xPos=xPos+velocity;

	if (xPos >= width){
		xPos=-xPos;
		velocity=velocity*xPos;
	}
}
*/
function Ball (xPos,yPos,velocity,yVelocity,sizeOne,sizeTwo){
	this.x =xPos;
	this.y = yPos;
	this.velocity =  velocity;
	this.yVelocity= yVelocity;
	this.sizeOne= sizeOne;
	this.sizeTwo= sizeTwo;

	this.animate = function(){
		this.x += this.velocity;
		if (this.x >= width || this.x<=0){
			this.velocity = -this.velocity;
		}	
		this.y+=this.yVelocity;
		if (this.y>= height || this.y<=0)
			this.yVelocity = -this.yVelocity;
	}
	this.display = function(){
		ellipse(this.x,this.y,this.sizeOne,this.sizeTwo);
	
	}





};


