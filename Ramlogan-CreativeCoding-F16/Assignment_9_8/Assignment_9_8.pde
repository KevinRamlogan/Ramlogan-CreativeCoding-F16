
void setup(){ 
 size (1000,1000);

  //everything in these brackets is part of setup
}
//Face Shape
void draw() {
  fill(216,163,145);
  ellipse (500,400,500,700);
  //everything here is part of  draw
  
  
//eyes  
  rect(300,300,100,100); //left
  fill(300,300,300);
  ellipse(350,350,75,50);
  noFill();
  fill(0,0,0);
  ellipse(350,350,25,25);
  noFill();  
  rect(500,300,100,100); //right
  fill(300,300,300);
  ellipse(550,350,75,50);
  noFill();
  fill(0,0,0);
  ellipse(550,350,25,25);
  noFill();
  
  //glasses frame
  strokeWeight(3);
  line(400,350,500,350);
  line(600,350,750,350);
  line(255,350,300,350);
  
  
  //nose
  triangle(450,400,450,500,500,500);
  //mouth
  fill(120,38,38);
  ellipse(500,600,200,50);
  noFill();
  //ears
  fill(216,163,145);
  ellipse(760,350,50,200);
  noFill();
//Hair
 beginShape();
  fill(0,0,0);
   rect(275,50,450,150);
   
   
   rect(300,250,100,25);
    rect(500,250,100,25);
noFill();

 endShape();
}