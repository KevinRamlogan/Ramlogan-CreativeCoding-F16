var rotAmount=0;
var x=1;
var y= 7;
var z =15;

function setup(){
  createCanvas(500,500);
 

}

function draw(){

	push();//new drawing matrix
	fill(x+rotAmount,y*rotAmount,z*rotAmount);
	translate(100,100);
	rotAmount=map(mouseX,0,width,0,3*PI);
	rotate(rotAmount);
	rect(0,0,40,40);
	pop();//end drawing matrix
  	
 	push();
 	fill(x+rotAmount,y*rotAmount,z*rotAmount);
 	translate(100,200);
 	rotAmount=map(mouseX,0,width,0,3*PI);
 	rotate(rotAmount);
 	rect(0,0,40,40);
 	pop();

 	push();
 	fill(x+rotAmount,y+rotAmount,z*rotAmount);
 	translate(300,100);
 	rotAmount=map(mouseY,0,width,0,3*PI);
 	rotate(rotAmount);
 	rect(0,0,40,40);
 	pop();

 	push();
 	fill(x+rotAmount,y+rotAmount,z*rotAmount);
 	translate(300,200);
 	rotAmount=map(mouseY,0,width,0,3*PI);
 	rotate(rotAmount);
 	rect(0,0,40,40);
 	pop();

 	push();
 	fill(mouseY,mouseX,mouseX*mouseX/10);
 	translate(200,150);
 	rotAmount=map(mouseY,mouseX,width,0,10*PI);
 	rotate(rotAmount);
 	rect(0,0,40,40);
 	pop();


}