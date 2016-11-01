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
	myObject = new Ball(250,0,5,2,30,30);
	myball = new Ball(250,0,5,2,30,30);
	myBallTwo = new Ball(250,0,5,2,30,30);
	myBallThree = new Ball(250,0,5,2,30,30);

}
function draw(){

	push();
	stroke(255,0,100);

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
			for (i=1; i<5;i++){
				this.sizeOne+=i/2;
				this.sizeTwo+=i/10;
									
		}
		}	

		this.y+=this.yVelocity;
		if (this.y>= height || this.y<=0){
			this.yVelocity = -this.yVelocity;
		}
		
	}
	this.display = function(){
		ellipse(this.x,this.y,this.sizeOne,this.sizeTwo);
	
	}





};


