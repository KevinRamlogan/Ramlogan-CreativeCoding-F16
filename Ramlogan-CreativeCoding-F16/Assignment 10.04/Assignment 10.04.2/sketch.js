//Kevin Ramlogan part 2 assignment 10.04 
//use mouseX/Y to change various conponents 

var rotAmount=0;
var x=1;
var y= 7;
var z =15;

function setup(){
  createCanvas(1000,1000);
 

}

function draw(){

	push();//new drawing matrix
	fill(rotAmount/2,mouseX,rotAmount);
	//color changes as the mouse moves
	rotAmount=map(mouseX,mouseY,width,0,10*PI);
	rotate(rotAmount);
	for (i=1;i<7;i++){
	translate(10+i,200+i);
	rect(i,i,mouseX,mouseY);
}
	pop();
	push();

	for (j=1;j<10;j++){
		fill(mouseX);
	 ellipse(mouseX,mouseY,j,z)	
	pop();

	push();
	for (k=1;k<10; k++);
		fill(mouseY);

	rect(mouseX,mouseY,30,30);
	translate(10*k,10*k);
	pop();

	}


}


