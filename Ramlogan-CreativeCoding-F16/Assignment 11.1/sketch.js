var shapeArray= [];
var _x;
var _y;
var _vel;
var _yVel;
var _size;

function setup(){
		createCanvas(600,600);
		background(random(0,255),random(0,100),random(125,200));
		for(var i = 0;i<5;i++){
			shapeArray[i]= new Shape(random(0,width),random(0,height),2,2,20);
		}


}

function draw(){
	for (var i =0; i<shapeArray.length;i++){
		shapeArray[i].animate();
		shapeArray[i].display();

	}


}

function mouseClicked(){
	var tempShape = new Shape(mouseX,mouseY,random(1,8),random(1,8),20);
	shapeArray.push(tempShape);

}
function mousePressed(){
	var newShape = new Shape(random(0,length),random(0,height),random(0,10),random(1,10),random(1,20));
	shapeArray.push(newShape);
}



function Shape (_x,_y,_vel,_yVel,_size){
	this.x=_x;
	this.y=_y;
	this.vel=_vel;
	this.yVel= _yVel;
	this.size = _size;

	this.animate = function(){
		this.x += this.vel;
		

			if (this.x>width || this.x< 0){
				this.vel=-this.vel;
				stroke(random(0,200),random(100,200), random(50,255))


			}
			this.y+=this.yVel;
			if(this.y>height || this.y<=0){
				this.yVel=-this.yVel;
			}


	}
	this.display = function(){
		rect(this.x,this.y,this.size,this.size);


	}







};